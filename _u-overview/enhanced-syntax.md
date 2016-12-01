---
layout: base
title:  'Enhanced Dependencies'
permalink: u/overview/enhanced-syntax.html
udver: '2'
---

# Enhanced Dependencies

We always intended the Universal Dependencies representation to be used in shallow natural language understanding tasks such as relation extraction or biomedical event mining. For such tasks, one is typically interested in the relation between certain entities, e.g., the relation between two persons or whether one protein interacts with another. UD is particularly well suited for such tasks as UD trees contain many direct relations between content words and many of the dependency labels provide a lot of information about the type of relation between two content words. However, for some constructions, the dependency path between two content words of interest is very long in a UD tree, which complicates determining how they the content words are related. Further, some dependency types such as [`obl`](u-dep/obl.html) or [`nmod`](u-dep/nmod.html) are used for many different types of arguments and modifiers, and are therefore not very informative on its own. For these reasons, we also provide guidelines for an _enhanced_ representation, which makes some of the implicit relations between words more explicit, and augments some of the dependency labels to facilitate the disambiguation of types of arguments and modifiers.


_Enhanced_ UD graphs may contain some or all of the following enhancements, which are described in the sections below.

* Null nodes for elided predicates
* Propagation of conjuncts
* Additional subject relations for control and raising constructions
* Arguments of passives (and other valency-changing constructions)
* Coreference in relative clause constructions 
* Modifier labels that contain the preposition or other case-marking information  


Note that the _enhanced_ graph is not necessarily a supergraph of the basic tree, i.e., it is not required to contain all the basic dependency relations. For this reason, all relations of the enhanced graph (also the ones that are present in the basic UD tree) have to be included in the _DEPS_ column of a CoNLL-U file. See the specificiation of the [CoNLL-U](conll-u.html) file format for details.

 



