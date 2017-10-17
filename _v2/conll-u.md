---
layout: base
title:  'CoNLL-U Format in UD v2'
udver: '2'
---

# CoNLL-U Format in UD v2

Some of the changes adopted in v2 require modifications to the CoNLL-U format. Whenever possible, we have tried to do this in the least disruptive fashion possible, keeping backward compatibility as far as we can. In particular, we have decided against changing the number of fields and/or their meaning for fear of breaking people's tools. We make the following changes for v2:

* Allow spaces in the `FORM` and `LEMMA` fields (see [word segmentation](segmentation.html))
* Let the `DEPS` field contain the entire enhanced dependency graph (not only additional relations on top of the basic trees) (see [enhanced dependencies](enhanced.html))
* Allow empty nodes with an indexing scheme distinct from both tokens and words and with relations in the `DEPS` field (see [ellipsis](ellipsis.html))
* Standardize sentence-level metadata
* Restrict the use of the `MISC` field for ease of processing

## Enhanced representation in the DEPS field

The `deps` field holds the *enhanced* representation. Unlike previously thought, it seems a better idea for the `DEPS` field to hold the entire enhanced parsed graph, not only a smaller set of relations on top of the base layer in `HEAD+DEPREL`. The primary reason is that minimally the *ellipsis* relations and in future undoubtedly many others are not a part of the enhanced graph but are rather replaced by some relations in it. See [enhanced dependencies](enhanced.html).

## Empty nodes in the enhanced representation

A mechanism is needed for empty nodes in the enhanced representation (the base representation will always be empty-node-free). These will be on their separate lines indexed as `2.1` which means "the first empty node after the syntactic word indexed 2". This line would be placed right after the word 2. Naturally, these empty nodes can be
referred to only from the `DEPS` field.

<!--There doesn't seem to be a clear idea of whether the empty nodes should receive any values in the `FORM, LEMMA, UPOS, FEAT`
fields. Probably `UPOS` could be somehow realistically filled.-->

Grepping out all lines which start with E is now sufficient to obtain a CoNLL-U file without empty nodes whose `HEAD` and `DEPREL` fields behave as usual.

<pre>
1	Mary	_	_	_	_	2	nsubj	2:nsubj	_
2	won	_	_	_	_	0	root	0:root	_
3	silver	_	_	_	_	2	obj	2:obj	_
4	and	_	_	_	_	5	cc	E5.1:cc	_
5	Sue	_	_	_	_	2	conj	E5.1:nsubj	_
5.1	_	_	_	_	_	2	conj	2:conj	_
6	bronze	_	_	_	_	5	orphan	E5.1:dobj	_
</pre>

<!--## Phrase-level features

Phrase-level features are features which apply to the whole phrase rather than a single word. These might include phrase-level negation, etc. In the CoNLL-U file, phrase-level features are prefixed with the `~` character but otherwise treated as usual. This will have the advantage of them sorting after any standard features.-->


## Sentence-level metadata

Sentence-level metadata can be provided as before and all tools are required to pass it through, as before. No particular requirements are put on these fields other than "no trailing whitespace". Several recognized key = value pairs should be standardized:

* sent_id = global_sentence_id
* text = sentence text

`sent_id` is compulsory and as per [#321](https://github.com/UniversalDependencies/docs/issues/321) it should not contain the `/` (slash) character.

## MISC field

The only global requirement on the `MISC` field is that it can be split on the `|` (bar) character without any complex processing of escaping. The requirement of `MISC` containing zero whitespace characters is dropped. Of course no TAB characters are allowed and no trailing whitespace is allowed. It is likely that `spacesBefore` and `spacesAfter` will be standardized as a part of the `MISC` field.

