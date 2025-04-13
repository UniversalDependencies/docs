---
layout: feature
title: 'ExtPos'
shortdef: 'external POS'
udver: '2'
---

This feature indicates the effective UPOS of an expression when it differs from the UPOS of the head word.

In English, only heads of a [`fixed`](https://universaldependencies.org/en/dep/fixed.html) relation 
and a small number of multiword proper names employ the feature, though in the future it may be broadened.

`ExtPos` is also used in the [SUD](https://surfacesyntacticud.github.io/) framework.

### <a name="ADP">`ADP`</a>: adposition-like expression

#### Examples

* _figures <b>such as</b> the Pope_ (_such_ = `ADJ`)
* _I want a cat <b>instead of</b> a dog_ (_instead_ = `ADV`)
* _<b>according to</b> the Pope_ (_according_ = `VERB`)

### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* _I like dogs, <b>of course</b>_ (_of_ = `ADP`)

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* _I like dogs <b>as well as</b> cats_ (first _as_ = `ADV`)
* _I don't want a cat <b>let alone</b> a dog_ (_let_ = `VERB`)

### <a name="PRON">`PRON`</a>: pronoun-like expression

#### Examples

* _<b>one another</b>_ (_one_ = `NUM`)
  - By contrast, _each other_ is analyzed with a `det` relation, not `fixed`, so `ExtPos` is not used there.

### <a name="PROPN">`PROPN`</a>: proper name expression

This is applied to multiword proper names analyzed internally as something other than a nominal,
e.g. as a verb phrase or clause.

#### Examples

~~~ sdparse
I saw Some/DET Like/VERB[ExtPos=PROPN] It/PRON Hot/ADJ
obj(saw, Like)
nsubj(Like, Some)
obj(Like, It)
xcomp(Like, Hot)
~~~

**Note:** Proper name tagging conventions inherited from PTB might suggest that _Like_ be tagged as `PROPN`
along with all name-internal content words. For names with non-nominal structure, we make an exception
and instead follow the UD universal recommendation that `PROPN` be restricted to true nouns, applying the
morphosyntactically accurate tags (`VERB`, etc.) coupled with `ExtPos=PROPN` on the head.
This avoids apparent anomalies like non-copular `PROPN`s with subjects.

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* _pastimes <b>such as</b> eating cake_ (_such_ = `ADJ`)
* _I brought an umbrella <b>in case</b> it rains_ (_in_ = `ADP`)
* _Let's walk <b>instead of</b> taking the bus_ (_instead_ = `ADV`)
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:09:40 CET -->
