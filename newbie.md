---
layout: base
title:  'Universal Dependencies'
udver: '2'
---

## What is UD?

Universal Dependencies (UD) is a project aiming to provide data resources so that it is easy to produce
natural language processing (NLP) tools that give 
consistent analyses of the grammatical structure of sentences across many human languages.

What does that mean? Suppose you’re a regular programmer but you have to deal with some open-domain
human language text. Maybe you’re mining product descriptions or maybe you’re developing
features for an ad placement classifier. Either way, you want to identify the
adjectives that describe a noun. This involves having a tool that will assign word classes
(“parts of speech”) to words, so you can find the nouns, etc., and it requires recovering
syntactic relationships, so you know _which_ adjectives describe _which_ nouns.
For example, _**fun**_ describes _student_ here:

> _a **fun** and intelligent student_

That’s grammatical structure. Over the last thirty years, many data resources have been built
for many languages to help with this goal. The particular gap that UD seeks to fill is that in general these various resources
have used different names for word class and grammatical relationships and have often given sentences quite different kinds of 
structures, variously inspired by different syntactic theories. The goal of UD is that the same word class will be given the
same name in each language, the syntactic relationships will be the same, the syntactic structures of sentences will be done
the same way and the same feature names will be used for indicating things like plural or negation.
In this way, it is easy to recover the information you need from _either_ English or French text, for example:

<div id="n1" class="sd-parse">
He is a fun and intelligent student
amod(student, fun)
</div>

<div id="n2" class="sd-parse">
l’ étudiant intelligent et rigolo
amod(étudiant, rigolo)
</div>

while also being able to notice that _**fun**_ doesn't modify the student here:

<div id="n3" class="sd-parse">
The course was fun for an intelligent student
nsubj(fun, course)
</div>

The style of syntactic analysis used in UD is [dependency grammar](). This simply means that, for each word,
you indicate which other word it modifies or is an argument of, and then indicate the type of relationship
with a grammatical relation label. Here’s a full example of UD analyses of paralle sentences in Russian and English.
Note how UD gives the same analysis of the same grammatical relationships, while also showing the differences
between Russian and English.


## How can I use UD?

There are basically two possibilities, based on whether you’re someone who wants language data for building processing tools
or whether you’re a humble user who hopes to use tools that others have built.

### Getting set up to use UD data

### Getting tools that take advantage of UD data

## How can I contribute to the Universal Dependencies project?
