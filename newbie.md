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
features for an ad placement classifier, but either way what you want to do is to identify the
adjectives that describe a noun. This involves first having a tool that will assign word classes
(“parts of speech”) to words, so you can find the nouns, etc. And then it also requires recovering
syntactic relationships, so you know _which_ adjectives describe _which_ nounx. For example, _**fun**_ describes _student_ here:

> _a **fun** and intelligent student

That’s grammatical structure. Over the last thirty years, many data resources have been built
for many languages to help with this goal. The particular gap that UD seeks to fill is that in general these various resources
have used different names for word class and grammatical relationships and have often given sentences quite different kinds of 
structures, variously inspired by different syntactic theories. The goal of UD is that the same word class will be given the
same name in each language, the syntactic relationships will be the same, the syntactic structures of sentences will be done
the same and the same feature names will be used for indicating things like plural or negation. So you will be able to easily 
recover the information you need from _either_ English or French text, for example:

<div id="n1" class="sd-parse">
a fun and intelligent student
amod(student, fun)
</div>

<div id="n2" class="sd-parse">
l’ étudiant intelligent et rigolo
amod(étudiant, rigolo)
</div>

## How can I use UD?

There are basically two possibilities, based on whether you’re someone who wants language data for building processing tools
or whether you’re a humble user who hopes to use tools that others have built.

### Getting set up to use UD data

### Getting tools that take advantage of UD data

## How can I contribute to the Universal Dependencies project?
