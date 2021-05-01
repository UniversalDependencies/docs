---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Add">Add</a></td>
  <td><a href="#Dem">Dem</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Int">Int</a></td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Tot">Tot</a></td>
</tr>
</table>

This feature typically applies to
[pronouns](u-pos/PRON),
pronominal adjectives ([determiners](u-pos/DET)),
pronominal [numerals](u-pos/NUM) (quantifiers) and
pronominal [adverbs](u-pos/ADV).

### <a name="Prs">`Prs`</a>: personal or possessive personal pronoun or determiner

See also the [Poss]() feature that distinguishes normal personal
pronouns from possessives. Note that `Prs` also includes reflexive
personal/possessive pronouns (e.g. [cs] _se / svůj;_ see the
[Reflex]() feature).

#### Examples

* [en] _I, you, he, she, it, we, they, my, your, his, her, its, our,
  their, mine, yours, hers, ours, theirs_
* [cs] _já, ty, on, ona, ono, my, vy, oni, ony, se, můj, tvůj, jeho, její, náš,
  váš, jejich, svůj_

### <a name="Int">`Int`</a>: interrogative pronoun, determiner, numeral or adverb

Note that possessive interrogative determiners (_whose_) can be
distinguished by the [Poss]() feature.

#### Examples:

* [cs/en] _kdo / who, co / what, který / which, čí / whose, kolik /
  how many, how much, kolikátý / how-maniest_ (ordinal quantifier),
  _kolikrát / how many times, kde / where, kam / where to, kdy / when,
  jak / how, proč / why_

### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner, numeral or adverb

These are often parallel to interrogatives. Some tagsets might also
distinguish a separate feature of distance (_here / there_; [es] _aquí
/ ahí / allí_).

#### Examples

* [cs/en] _tento / this, tamten / that, takový / such, týž / same,
  tolik / so much, tolikátý / so-maniest_ (ordinal number), _tolikrát
  / so many times, tady / here, tam / there, teď / now, tehdy / then,
  tak / so_

### <a name="Tot">`Tot`</a>: total (collective) pronoun, determiner or adverb

#### Examples

* [cs/en] _každý / every, everybody, everyone, each, všechno /
  everything, all, všude / everywhere, vždy / always_

### <a name="Neg">`Neg`</a>: negative pronoun, determiner or adverb

Negative pronominal words are distinguished from negating [particles](u-pos/PART)
and from words that inflect for polarity (verbs, adjectives etc.) Those words
do not use `PronType=Neg`, they use `Polarity=Neg` instead. See the
[Polarity]() feature for further details.

#### Examples:

* [cs/en] _nikdo / nobody, nic / nothing, nijaký / no, ničí / no
  one's_ (possessive negative determiner), _žádný / no, none, nikde /
  nowhere, nikdy / never, nijak / no way_ (lit. “no-how”)

### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner, numeral or adverb

Note that some tagsets might further subclassify this category to
distinguish “some” from “any” etc. Such distinctions are not part of
universal features but may be added in language-specific extensions.

#### Examples

* [cs/en] _někdo / somebody, něco / something, některý / some, něčí /
  someone's_ (possessive indefinite pronoun), _několik / a few,
  several_ (indefinite numeral/quantifier), _několikátý / “a fewth”,
  “severalth”_ (indefinite ordinal numeral), _několikrát / a few
  times, several times, někde / somewhere, někdy / sometimes, nějak /
  somehow_
* [cs/en] _kdokoli / anybody, cokoli / anything, kterýkoli / any,
  číkoli / anyone's_ (possessive indefinite pronoun), _kdekoli /
  anywhere, kdykoli / any time, jakkoli / anyhow_
* [cs/en] _málokdo / few people, leckdo / quite a few people, kdosi /
  somebody…_

### <a name="Add">`Add`</a>: additive pronoun

This type is specific for Mbyá Guaraní. Additive pronouns are unspecified for definiteness.

#### Examples

* [gun] _amboae_ “another / the other”

<!-- Interlanguage links updated Čt lis 12 09:43:06 CET 2020 -->
