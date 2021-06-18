---
layout: feature
title: 'ExtPos'
shortdef: 'external POS'
udver: '2'
---

This feature indicates, for the head of a [fixed expression](https://universaldependencies.org/en/dep/fixed.html), 
the effective UPOS of the full expression when it differs from the UPOS of the word itself.

`ExtPos` is used in the [SUD](https://surfacesyntacticud.github.io/) framework and appears in the MISC column 
of some UD treebanks. Its inclusion in FEATS is currently specific to English, and only heads of the `fixed` relation, 
though in the future it may be broadened.

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

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* _pastimes <b>such as</b> eating cake_ (_such_ = `ADJ`)
* _I brought an umbrella <b>in case</b> it rains_ (_in_ = `ADP`)
* _Let's walk <b>instead of</b> taking the bus_ (_instead_ = `ADV`)
