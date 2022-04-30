---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

Even though the name of the feature seems to suggest that it is used
exclusively with [verbs](u-pos/VERB), it is not the case. Some verb
forms in some languages actually form a gray zone between verbs and
other parts of speech ([nouns](u-pos/NOUN), [adjectives](u-pos/ADJ)
and [adverbs](u-pos/ADV)). For instance, participles may be either
classified as verbs or as adjectives, depending on language and
context. In both cases `VerbForm=Part` may be used to separate them
from other verb forms or other types of adjectives.

Bulgarian does not have an infinitive. It distinguishes: finite verbs and non-finite verbs (participles
and transgressives).

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite.
This features is encoded in the following values as second position in verbal tags: `Vp#` (personal verb); `Vn#` (impersonal verb); `Vx#`, `Vy#` and `Vi#` (auxiliary verbs).

#### Examples

- Аз съм, ти си / _Az sam, ti si_ "I am, you are"
- Трябва да дойдеш /_Tryabva da doydesh_ "You must come"
- Прочетох книгата / _Prochetoh knigata_ "I read the book"

### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form that shares properties of verbs
and adjectives. The participle in Bulgarian is encoded as `c` in fifth position of the tag: `V#c#`.

In Bulgarian there are four types of participles: _present active, past perfective active, past imperfective active, past passive_. The present active one can be used only adjectively; the past imperfective one can be used only in evidential verb forms; the other have the two usages. The _present active_ can be derived only from imperfective verbs.

#### Examples

- виждащ / _vizhdasht_ "seeing" (present active). BulTreeBank tag: `V#car#`
- видял / _vidyal_ "seen" (past perfective active). BulTreeBank tag: `V#cao#`
- видел / _videl_ "seen" (past imperfective active). BulTreeBank tag: `V#cam#`
- видян / _vidyan_ "seen" (past passive). BulTreeBank tag: `V#cv#`


### <a name="Conv">`Conv`</a>: converb

The converb, also called adverbial participle, is a non-finite
verb form that shares properties of verbs and adverbs. It appears
e.g. in Slavic and Indo-Aryan languages.

In Bulgarian it can be derived only from imperfective verbs.

#### Examples

- Виждайки това, той се разстрои / _Vizhdayki tova, toy se razstroi_ "Having seen this, he became upset". BulTreebank tag: `V#g`


Note that the symbol `#', used in the Universal POS section indicates a holder for arbitrary number of features, suppressed in the respective tag as irrelevant in the BulTreeBank tagset, when mapped to the Universal one.

<!-- Interlanguage links updated St lis 3 20:58:31 CET 2021 -->
