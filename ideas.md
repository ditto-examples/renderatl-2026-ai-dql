So I'm giving a talk next week at RenderATL. My theory of the talk is this:

I've spent a lot of time this past 3 months on a question: not whether we could make it faster, but where the effort would pay off most — the quickest wins, at the lowest risk of regression, for the least time spent changing and testing. I went in confident we had real room to improve; what I didn't expect was just how much. Following the investigation process I'll walk you through in this talk — using AI to map our code paths into visual flows, then measuring them with tools we built along the way — we took one of our heaviest queries, a COUNT over a large dataset, from 7,159 ms down to 16 ms. I knew the ceiling was high. I was genuinely, pleasantly surprised by how high. This session is the story of how we got there, and how those numbers changed the way we ship.

I work at Ditto you can learn about Ditto here:
https://docs.ditto.live/home/about-ditto
https://docs.ditto.live/key-concepts/databases-and-collections
https://docs.ditto.live/key-concepts/document-model
https://docs.ditto.live/key-concepts/accessing-data
https://docs.ditto.live/key-concepts/syncing-data
https://docs.ditto.live/key-concepts/authentication-and-authorization
https://docs.ditto.live/key-concepts/mesh-networking

Ditto is a Edge based database that allows users to sync via a mesh network. You need to understand Ditto to help me. The Database uses a SQL like query language called DQL. You can learn more about it here:
https://docs.ditto.live/dql/dql

So I'm thinking that this talk needs to be broken down into parts. It's 20 minutes long, so I need to be concise.

Here is my current outline ideas:

- Introduction

  - Who am
   I
  - What is Ditto

- The Problem

  - Adam's message on Slack - we have problems with both query and memory on Android when a potential client was benchmarking Ditto.

  - Adam asked me to investigate, figure out if the numbers were right (we thought they might be off), and then if they were right, to figure out how to make them better. This was on a Thursday.

  - Friday morning, talk with my boss get actual data from the team that was working with the potential client to get the report. The report didn't share with us the dataset they used only the rules that they were testing.

    - They benchmarked two things - Query performance - Memory Usage by injecting a document every 250 ms and then listening to that on another device through an observer API we have. - The report showed that the query performance was significantly slower than expected, and memory usage was spiking.

- How can I even start to investigate this?

  - I need something fast to look into this. What do I need to get started?
  
    - I needed data, it didn't need to be the same exact data, it just needed to be shaped in a similar way. In most document based databases it's usually about the amount of fields and how many items are nested in arrays or what we refer to as maps in the world of CRDTs.

    - I had a sample dataset that was similar that we used for demoing off the MongoDb connector on another project.

    - I needed to create normal queries that one would run to test performance. Worked with my boss to create a set of queries that would be representative of what a user might do. We created a set of 48 queries that we would run against the dataset.

    - I needed to be able to measure the performance of those queries.
      - Ditto already has a performance tool called DTP, and it works in the Ditto Mesh Lab, a very impressive set of over 50 mobile devices that we use to fully test our mesh networking technology. DTP was attractive but it wasn't built to do what I wanted to do.

    - I needed something that could work with multiple versions of our SDK and I wanted to be able to run the benchmarks against other database platforms like SQLite so I could compare performance. DTP was engineered to only work with Ditto.

    - Decided I needed to build my own simple tool to test the query performance.
      - I needed it to be able to work with multiple versions of our SDK.

      - I was going to focus on Android only because that's what they reported they were using.

      - I could use some gradle magic and the adapter pattern to swap out SDK versions or even platform versions and that would solve the problem of running tests against multiple versions of our SDK or even multiple platforms.

    - I realized early on I needed to be able to swap out the dataset, so my first job for AI was to create a format for our benchmarks. I gave it my requirements and sample dataset and explained we needed to do some work before running the benchmark, we needed to run the benchmark, and then we neeeded to be able to do some clean up afterward and all of this should be flexible. While AI was working on that, I started to finish up my design document of a poc of the simply benchmark tool I wanted to create.
  
    - Creating the first design and testing it went very quickly with AI help. I wrote the design document with no AI help and then fed it to the AI to ask for feedback, we did a couple itterations on the design (I used superpowers planning plugin to help with that).

    - The first verison of the benchmark tool came together within a few hours and after I code reviewed it and fixed a couple of things I thought should be done a little differently, I was able to run the first set of benchmarks on a device I had locally (physical hardware is important for these kind of benchmark tests).

    - So the numbers weren't great.

- The Investigation

  - I had a simple tool and I had numbers, they weren't great but how do I even begin to investigate this? I'm not a query engineer, and I'm new to the query engine code base. By this time it's Friday night and it's not like I can just ask them to explain the entire engine to me. I needed an answer by Monday on what was going on.  

  - So I needed a way to figure out which parts of the code that could be causing the problem.  I instantly went to instrumentation.  Perfetto is the standard tool that Android uses.

  - If I record my benchmarks running I can then just get a trace of the code and where the time is being spent.  If I do that then I can have AI help me start to look at areas that maybe we have a problem.

  - First AI tip:  With instrumentation, I could have zoom into a part of the instrumentation and then have it draw a diagram of the flow of the code.  I had it build diagrams as SVG files and then conver them to PNG so I can could embed them into markdown files and use them for research on my investigation.

  - I will note that the minute I showed up to a meeting and showed some of the diagrams a lot of the development team was sceptical about the diagrams because they thought I had AI scan the code to generate the diagrams.  When I explained that I had instrumented the code and then had AI help me draw the diagrams, they were much more receptive to the idea.

  - Next I updated the program to pull down DQL profiling information.  This allowed me to see what the query engine was spending time doing.  I could then use these along with my instrumentation to start to figure out places in the code I could research.

  - 