---
layout: base
title:  'UD version 2'
---

# UD version 2

This is the workspace that was used for preliminary discussions of v2 of the universal guidelines in August-September 2016. It is now preserved mainly for archival purposes. The current v2 draft, can be found [here](../v2/index.html). 

Deadlines (revised 2016-10-17):

* 2016-10-17: Draft guidelines made available for feedback
* 2016-12-01: Guidelines fixed for spring release and CoNLL shared task

Some quick links:

* [UD v2 draft](../v2/index.html)
* [Issue tracker, universal v2 filter](https://github.com/UniversalDependencies/docs/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20milestone%3A%22universal%20v2%22)
* [Uppsala meeting](/workgroups/2015-08-23-uppsala/)

## The main issues

1. **[Core dependents.](core_dependents.html)**
   The distinction between core dependents and the rest is fundamental to the whole taxonomy.
   Having specific and cross-linguistically consistent guidelines for core dependents is therefore
   crucial for putting the whole enterprise on a solid footing. This involves clarifying the
   treatment of (among other things) double objects, reflexives, expletives, copula constructions
   and valency-changing operations.
   Relevant reports from the Uppsala meeting include:
   [copula](../2015-08-23-uppsala/copula.html),
   [clitics](../2015-08-23-uppsala/clitics.html).
1. **[Functional labels.](function_dependents.html)**
   Cross-linguistic guidelines for the use of the functional labels such as `aux`, `det`, `cop`.
   There is currently a lot of variation around this.
   Representing lexical heads promotes cross-linguistic parallelism, but only if we can agree on what lexical heads *are*.
1. **[Tokenization](tokenization.html)** (or perhaps better, word segmentation).
   We need to be able to handle the whole spectrum from multitoken words in Vietnamese to multiword
   tokens in Turkish. Ideally, we should also set up more substantial criteria for when to split
   tokens into words and vice versa. On this issue, there is a relevant
   [paper dealing with the Turkish case](http://coltekin.net/cagri/tmp/ig-paper.pdf).
   See also the report from the Uppsala meeting: [tokenization](../2015-08-23-uppsala/tokenization.html).
1. **[Enhanced dependencies.](enhanced.html)**
   Having a first version of the guidelines for enhanced dependencies is important not just for its own sake,
   but also because it has implications for the basic dependencies. If we know that something
   can be captured in the enhanced dependencies, we don’t need to clutter the basic dependencies with
   this information. Examples of constructions that can benefit from this are control verbs and light verb
   constructions. In this connection, it would also be relevant to discuss what language-specific subtypes can and cannot be used for. We seem to have a lot of inconsistencies here. Report from Uppsala meeting: [future](../2015-08-23-uppsala/future.html).
1. **[Ellipsis.](ellipsis.html)**
   There seems to be a consensus that we should get rid of the remnant relation, but it is still unclear
   what we should put in its place.
   See the report from the Uppsala meeting here: [ellipsis](../2015-08-23-uppsala/ellipsis.html).
   Conceivably, the enhanced dependencies could be put to use here as well.
1. **[Part-of-speech tags and their relation to syntax.](form_vs_function.html)** To what extent should the part-of-speech tag be
   predictable from the syntactic relation and vice versa? For example, does “det” imply “DET” (rather than “PRON”)
   or does “DET” imply “det” (or both or neither)? Coming up with a more consistent set of principles for making
   these decisions will be important to achieve (better) cross-language consistency.
1. **[Features.](features.html)** Check the [language-specific features](/ext-feat-index.html) and values defined so far in our treebanks. Add new values to existing features where necessary. Do we need entire new features as well? Evidentiality perhaps?
1. **[Coordination.](coordination.html)** We may want to revise the guidelines for coordination and similar constructions. (See report from the Uppsala meeting: [coordination](../2015-08-23-uppsala/coordination.html) and a [position paper](https://aclweb.org/anthology/W/W16/W16-1715.pdf))
1. **[CoNLL-U.](conllu.html)** The definition of the CoNLL-U format may have to be revised in the light of decisions about tokenization (see above). In addition, we should standardize comments for sentence ids, etc.

## Proposed revisions

1. Remove [u-dep/nsubjpass](), [u-dep/csubjpass](), and [u-dep/auxpass]() from the list of universal relations. [Discussion](core_dependents.html)
1. Require language-specific subtypes to be used for true syntactic subtypes, not cross-classification of syntax/semantics.  [Discussion](enhanced.html)
1. Remove [u-dep/remnant]() from universal relations. Use promotion + enhanced representation to annotate ellipsis. [Discussion](ellipsis.html)
1. New general principles for form vs. function in POS assignment, and new proposal for categorizing the pronominal words. [Discussion](form_vs_function.html)
