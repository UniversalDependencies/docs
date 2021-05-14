---
layout: feature
title: 'VerbType'
shortdef: 'verb type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Aux">Aux</a></td>
  <td><a href="#Cop">Cop</a></td>
  <td><a href="#Mod">Mod</a></td>
  <td><a href="#Light">Light</a></td>
  <td><a href="#Quasi">Quasi</a></td>
</tr>
</table>

We already split auxiliary and non-auxiliary verbs at the level of UPOS tags.
The `VerbType` feature may be used to capture finer distinctions that some
tagsets make.

### <a name="Aux">`Aux`</a>: auxiliary verb

Verb used to create periphrastic verb forms (tenses, passives etc.) In
many languages there will be ambiguity between auxiliary and other
usages, thus the same verb should get different feature values depending
on context.

#### Examples

* [af] _Dit <b>het</b> tot 'n verenigde staat gelei._ “This has led to a united state.”

### <a name="Cop">`Cop`</a>: copula verb

Verb used to make nominal predicates from adjectives, nouns or
participles. Some languages omit the copula or use other means to
create nominal predicates. In languages that have copula, it is often
the equivalent of the verb “to be”.

#### Examples

* [en] _It <b>is</b> purple._

### <a name="Mod">`Mod`</a>: modal verb

A group of verbs traditionally distinguished in grammars of some
languages. They take infinitive of another verb as argument (with or
without infinitive-marking conjunction, in languages that have it) and
add various modes of possibility, necessity etc. to the meaning of the
infinitive. There are other verbs that take infinitives as arguments
but they are not considered modal (e.g. phasal verbs such as “to
*begin* to do something”). The set of modal verbs for a language is
closed and can be enumerated. Depending on language-internal considerations,
modal verbs may be considered a subset of auxiliaries ([AUX]()) or
non-auxiliary verbs ([VERB]()).

Note that some languages (e.g. Turkish) use special forms of the main
verb instead of combining it with a modal verb.

#### Examples

* [de] _dürfen_ “may”, _können_ “can”, _mögen_ “want/like”,
  _müssen_ “must”, _sollen_ “shall”, _wollen_ “want”, _wissen_ “know (how to)”
* [cs] _muset_ “must”, _mít_ “shall, have (to)”, _moci_ “can”, _smět_
  “may, be allowed (to)”, _umět_ “know (how to)”, _chtít_ “want”

### <a name="Light">`Light`</a>: light (support) verb

Light or support verb is used in verbo-nominal constructions where the main part of the meaning
is contributed by a noun complement but it is not just a nominal predicate with a copula.
An English example would be _to take a nap,_ where _take_ is the light verb.
It is often the case that the light verb can also function as a normal verb
in the language (cf. _to take two dollars_).
If the light verb constructions are used frequently in a language (e.g. Hindi or Japanese) or
if there is a dedicated light verb that cannot be used as normal verb,
it makes sense to mark light verbs with a dedicated feature value.

#### Examples

* [ja] <b>する</b> / _<b>suru</b>_ “do”

### <a name="Quasi">`Quasi`</a>: quasi-verb

A word that functions partially as a verb and is tagged [VERB](), yet it is defective in
some other aspect that are typical of verbs in the given language. For example, quasi-verbs
in Polish function as predicates and take infinitives of regular verbs as complements,
yet their morphology is not verbal: they are more like frozen forms of adjectives.

#### Examples

* [pl] _<b>można</b>_ “possible”, _<b>trzeba</b>_ “necessary”, _<b>warto</b>_ “worth”

<!-- Interlanguage links updated Pá kvě 14 11:08:43 CEST 2021 -->
