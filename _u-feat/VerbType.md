---
layout: feature
title: 'VerbType'
shortdef: 'verb type'
udver: '2'
---

We already split auxiliary and non-auxiliary verbs at the level of POS
tags but some tagsets mark other distinctions.

### <a name="Aux">`Aux`</a>: auxiliary verb

Verb used to create periphrastic verb forms (tenses, passives etc.) In
many languages there will be ambiguity between auxiliary and other
usages, thus the same verb should get different tags or feature values
depending on context.

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
but they are not considered modal (e.g. phasal verbs such as "to
*begin* to do something"). The set of modal verbs for a language is
closed and can be enumerated.

Note that some languages (e.g. Turkish) use special forms of the main
verb instead of combining it with a modal verb.

#### Examples

* [de] _dürfen_ (may), _können_ (can), _mögen_ (want/like to),
  _müssen_ (must), _sollen_ (shall), _wollen_ (want to), _wissen_ (know how to)
* [cs] _muset_ (must), _mít_ (shall, have to), _moci_ (can), _smět_
  (may, be allowed to), _umět_ (know how to), _chtít_ (want to)

### <a name="Light">`Light`</a>: light (support) verb

Light or support verb is used in verbo-nominal constructions where the main
part of the meaning is contributed by a noun complement.
An English example would be _to take a nap,_ where _take_ is the light verb.
It is often the case that the light verb can also function as a normal verb
in the language (cf. _to take two dollars_).
If the light verb constructions are used frequently in a language (e.g. Hindi or Japanese) or
if there is a dedicated light verb that cannot be used as normal verb,
it makes sense to mark light verbs with a dedicated feature value.

#### Examples

* [ja] <b>する</b> / _<b>suru</b>_ “do”

<!-- Interlanguage links updated Čt lis 12 09:43:08 CET 2020 -->
