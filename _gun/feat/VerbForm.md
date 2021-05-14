---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Fin">Fin</a></td>
  <td><a href="#Inf">Inf</a></td>
  <td><a href="#Part">Part</a></td>
  <td><a href="#Post">Post</a></td>
  <td><a href="#Prov">Prov</a></td>
  <td><a href="#Ser">Ser</a></td>
  <td><a href="#Vnoun">Vnoun</a></td>
</tr>
</table>

Even though the name of the feature seems to suggest that it is used
exclusively with [verbs](u-pos/VERB), it is not the case. Some verb
forms in some languages actually form a gray zone between verbs and
other parts of speech ([nouns](u-pos/NOUN), [adjectives](u-pos/ADJ)
and [adverbs](u-pos/ADV)). For instance, participles may be either
classified as verbs or as adjectives, depending on language and
context. In both cases `VerbForm=Part` may be used to separate them
from other verb forms or other types of adjectives.

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite. But beware
that some tagsets conflate verb forms and moods into one feature.

#### Examples

* [en] _I <b>do</b>, he <b>does</b>_

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs in many languages. Unlike in
English, it often has morphological form that is distinct from the
finite forms. Infinitives may be used together with auxiliaries to
form periphrastic tenses (e.g. future tense [cs] _budu <b>sedět</b> v
letadle_ "I will sit in a plane"), they appear as arguments of modal
verbs etc.  In some languages they behave similarly to nouns and are
used as such (similar to the gerund in English).

#### Examples

* [de] _ich muss <b>gehen</b>_ “I must <b>go</b>”

### <a name="Part">`Part`</a>: participle, verbal adjective

Participle is a non-finite verb form that shares properties of verbs
and adjectives. Its usage varies across languages. It may be used to
form various periphrastic verb forms such as complex tenses and
passives; it may be also used purely adjectively.

Other features may help to distinguish past/present participles
(English), active/passive participles (Czech), imperfect/perfect
participles (Hindi) etc.

#### Examples

* [en] _he could have <b>been prepared</b> if he had
  <b>forseen</b> it_; _I will be <b>driving</b> home_.

### <a name="Vnoun">`Vnoun`</a>: verbal noun, masdar

Verbal nouns other than infinitives.
Also called masdars by some authors, e.g. Haspelmath, 1995.

#### Examples

* [cs] _<b>dělání</b>_ "doing"

### <a name="Ser">`Ser`</a>: second verb in a serial verb construction

Second verbs in serial verb constructions have a special form.

#### Examples

* [gun] _ñanerembiapo mi tojapouka <b>rekovy</b>_ “look at our work” (lit. our-doing at cause-do <b>live</b>)

### <a name="Post">`Post`</a>: postposed verb

Another special form that is used in serial verb constructions.

#### Examples

* [gun] _Mava'e oikuaa <b>pota</b>?_ “Who will try to know?” (lit. who know <b>try</b>)

### <a name="Prov">`Prov`</a>: proverb

#### Examples

* [gun] ???

<!-- Interlanguage links updated Pá kvě 14 11:08:42 CEST 2021 -->
