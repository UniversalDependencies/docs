---
layout: base
title:  'UD version 2'
---

# UD version 2

This is the entry point for pages where we prepare version 2 of the universal guidelines.
It is not a clone of the [main documentation](../index.html). The relevant documentation pages should be referenced from here,
their modification proposed and discussed here, and later copied to the documentation.

Deadlines:
* 2016-09-01: Draft guidelines made available for feedback
* 2016-10-01: Guidelines fixed for next release
* 2016-11-01: Data freeze for next release

Some quick links:

* [Issue tracker, universal v2 filter](https://github.com/UniversalDependencies/docs/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20milestone%3A%22universal%20v2%22)
* [Uppsala meeting](../uppsala.html)

1. ***Core dependents.***
   The distinction between core dependents and the rest is fundamental to the whole taxonomy.
   Having specific and cross-linguistically consistent guidelines for core dependents is therefore
   crucial for putting the whole enterprise on a solid footing. This involves clarifying the
   treatment of (among other things) double objects, reflexives, expletives, copula constructions
   and valency-changing operations.
   Relevant reports from the Uppsala meeting includes:
   http://universaldependencies.org/2015-08-23-uppsala/copula.html,
   http://universaldependencies.org/2015-08-23-uppsala/clitics.html.

2. ***Tokenization*** (or perhaps better, word segmentation).
   We need to be able to handle the whole spectrum from multitoken words in Vietnamese to multiword
   tokens in Turkish. Ideally, we should also set up more substantial criteria for when to split
   tokens into words and vice versa. On this issue, I can recommend the following paper dealing
   with the Turkish case: http://coltekin.net/cagri/tmp/ig-paper.pdf.
   See also the report from the Uppsala meeting: http://universaldependencies.org/2015-08-23-uppsala/tokenization.html.

3. ***Enhanced dependencies.***
   Having a first version of the guidelines for enhanced dependencies is important not just for its own sake,
   but also because it has implications for the basic dependencies. Basically, if we know that something
   can be captured in the enhanced dependencies, we don’t need to clutter the basic dependencies with
   this information. Examples of constructions that can benefit from this are control verbs and light verb
   constructions. Report from Uppsala meeting: http://universaldependencies.org/2015-08-23-uppsala/future.html.

4. ***Ellipsis.***
   I think there is a consensus that we should get rid of the remnant relation, but it is still unclear
   what we should put in its place.
   See the report from the Uppsala meeting here: http://universaldependencies.org/2015-08-23-uppsala/ellipsis.html.
   Conceivably, the enhanced dependencies could be put to use here as well.

5. ***Part-of-speech tags and their relation to syntax.*** To what extent should the part-of-speech tag be
   predictable from the syntactic relation and vice versa? For example, does “det” imply “DET” (rather than “PRON”)
   or does “DET” imply “det” (or both or neither)? Coming up with a more consistent set of principles for making
   these decisions will be important to achieve (better) cross-language consistency.
