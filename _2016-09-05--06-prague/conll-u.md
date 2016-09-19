---
layout: base
title:  'CoNLL-U Format in UD v2'
---

# CoNLL-U Format in UD v2

* A change in the number of columns and/or their meaning was opposed in the fear of breaking peoples' tools.

## Deps field

* The `deps` field holds the *enhanced* representation. Unlike
  previously thought, it seems a better idea for the `DEPS` field
  to hold the entire enhanced parsed graph, not only a smaller set
  of relations on top of the base layer in `HEAD+DEPREL`. The primary
  reason is that minimally the *ellipsis* relations and in future undoubtedly
  many others are not a part of the enhanced graph but are rather replaced
  by some relations in it.

## Empty nodes in the enhanced representation

* A mechanism is needed for empty nodes in the enhanced representation
(the base representation will always be empty-node-free). These will
be on their separate lines indexed as `E2.1` which means "the first
empty node after the syntactic word indexed 2". This line would be
placed right after the word 2. Naturally, these empty nodes can be
referred to only from the `DEPS` field.

* There doesn't seem to be a clear idea of whether the empty nodes
should receive any values in the `FORM, LEMMA, UPOS, FEAT`
fields. Probably `UPOS` could be somehow realistically filled.

* Grepping out all lines which start with E is now sufficient to obtain
a CoNLL-U file without empty nodes whose `HEAD` and `DEPREL` fields behave
as usual.

```
1	Mary	_	_	_	_	2	nsubj	2:nsubj	_
2	won	_	_	_	_	0	root	0:root	_
3	silver	_	_	_	_	2	dobj	2:dobj	_
4	and	_	_	_	_	2	conj>cc	E5.1:cc	_
5	Sue	_	_	_	_	2	conj>nsubj	E5.1:nsubj	_
E5.1	_	_	_	_	_	2	conj	2:conj	_
6	bronze	_	_	_	_	2	conj>dobj	E5.1:dobj	_
```

## Phrase-level features

* Phrase-level features are features which apply to the whole phrase
rathen than a single word. These might include phrase-level negation,
etc. In the CoNLL-U file, phrase-level features are prefixed with the
`~` character but otherwise treated as usual. This will have the
advantage of them sorting after any standard features.


## Misc field and sentence-level metadata

* Sentence-level metadata can be provided as before and all tools are required to pass it through, as before. No particular requirements are put on these fields other than "no trailing whitespace".
* Several recognized key = value pairs are standardized:
  * sentence_id = global_sentence_id
  * text = sentence text
* The only global requirement on the MISC field is that it can be split on the `|` (bar) character. The requirement of MISC containing zero whitespace characters is dropped. Of course no TAB characters are allowed.
