---
layout: base
title:  'FTB Introduction'
---


Introduction to FinnTreeBank 1 UD version
=========================================

The University of Helsinki provides a different Finnish treebank,
converted to the UD notation from FinnTreeBank 1 2014 (aka Finnish
TreeBank 1 2014, FTB1 2014, a revised version completed in 2014). The
19089 sentences and fragments originate as grammatical examples in
VISK. The treebank consists of 161906 tokens, sentence lengths from 1
to 72 tokens with quartiles 5, 7, 11).

The source model
================

FinnTreeBank 1 was prepared manually in the University of Helsinki
to specify a grammatical description model.

The FinnTreeBank model is broadly similar in spirit to the new model.
The main differences are that, first, FinnTreeBank uses a more abstract
set of relations, while the new model specifies different relations based on
the features of the dependent, and, second, FinnTreeBank uses chained
structures where the new model bundles, e.g., auxiliaries directly to
one head verb and all conjuncts (and their conjunctions) to the first.

The mapping
===========

The FinnTreeBank 1 version to be included in the UD effort is created by
automatic scripts that relabel and restructure the annotations to
match the UD Finnish specification.

Relation labels were mostly mapped to the new model by observing
the various features of the dependent and its head. FinnTreeBank
"attributes" (attr) and "modifiers" (mod) were conflated and then split
by the type of the dependent (amod, nmod, ...).

The current mapping is not as fine-grained as the new specification.
Some relations are still mapped to the catchall relation "dep", and
others left at an otherwise coarse level in the UD Finnish hierarchy.

Auxiliary chains were undone by lifting the dependents of auxiliaries,
including copulas, to their head. This also includes the "modal" words
in FinnTreeBank, which are certain nominals within verb chains.

A similar lifting was done in conjunct chains, so that a conj of
a conj became a conj of its head.

There is a prominent difference in tokenization: many function words
in Finnish may be fused with the negative verb to become one surface word,
and these are segmented as two tokens in FinnTreeBank, both originally and
in the UD version. This seems compatible with the goals of the
universal model. (Note: Possibly clitic particles should be split, too, but
neither FinnTreeBank nor the current UD Finnish model does that. It
might be a challenge for tool chains, but it might be more compatible
with the goal of a universal annotation model.)

Punctuation is not handled properly in FinnTreeBank. Most punctuation
marks are simply linked automatically to a nearby token.
