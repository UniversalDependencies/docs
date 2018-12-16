---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Art">Art</a></td>
  <td><a href="#Dem">Dem</a></td>
  <td><a href="#Emp">Emp</a></td>
  <td><a href="#Exc">Exc</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Int">Int</a></td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Rcp">Rcp</a></td>
  <td><a href="#Rel">Rel</a></td>
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

### <a name="Rcp">`Rcp`</a>: reciprocal pronoun

This value is used for pronouns that are specifically reciprocal. If a reflexive pronoun can be used to convey reciprocal meaning,
it is still labeled as reflexive (`PronType=Prs|Reflex=Yes`). It is not marked as reciprocal in contexts in which it is used
reciprocally.

Reciprocal means that there is a plural subject and every member of the group does the thing described by the predicate to
every other member of the group. A reciprocal pronoun is used in the object position to signal such configuration.

#### Examples

* [de] _einander_ “each other”
* [da] _hinanden_ “each other”

### <a name="Art">`Art`</a>: article

Article is a special case of determiner that bears the feature of
[definiteness](Definite) (in other languages, the feature may be
marked directly on nouns).

#### Examples

* [en] _a, an, the_ 
* [de] _ein, eine, der, die, das_ 
* [es] _un, una, el, la_

### <a name="Int">`Int`</a>: interrogative pronoun, determiner, numeral or adverb

Note that possessive interrogative determiners (_whose_) can be
distinguished by the [Poss]() feature.

#### Examples: 

* [cs/en] _kdo / who, co / what, který / which, čí / whose, kolik /
  how many, how much, kolikátý / how-maniest_ (ordinal quantifier),
  _kolikrát / how many times, kde / where, kam / where to, kdy / when,
  jak / how, proč / why_

### <a name="Rel">`Rel`</a>: relative pronoun, determiner, numeral or adverb

Note that in many languages this class heavily overlaps with
interrogatives, yet there are pronouns that are only relative, and in
some languages (Bulgarian, Hindi) the two classes are distinct.

#### Examples: 

* [cs] _jenž, což_ “which”, “that” (relative but not interrogative
  pronouns); _jehož_ “whose” (possessive relative pronoun)

### <a name="Exc">`Exc`</a>: exclamative determiner

Exclamative pro-adjectives (determiners) express the speaker’s surprise towards
the modified noun, e.g. _what_ in “What a surprise!” In many languages,
exclamative determiners are recruited from the set of interrogative determiners.
Therefore, not all tagsets distinguish them.

#### Examples: 

* [it] _che_
* [cs] _jaký_ as in “Jaké překvapení!”
* [en] _what_ as in “What a surprise!”

### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner, numeral or adverb

These are often parallel to interrogatives. Some tagsets might also
distinguish a separate feature of distance (_here / there_; [es] _aquí
/ ahí / allí_).

#### Examples

* [cs/en] _tento / this, tamten / that, takový / such, týž / same,
  tolik / so much, tolikátý / so-maniest_ (ordinal number), _tolikrát
  / so many times, tady / here, tam / there, teď / now, tehdy / then,
  tak / so_

### <a name="Emp">`Emp`</a>: emphatic determiner

Emphatic pro-adjectives (determiners) emphasize the nominal they depend on.
There are similarities with reflexive and demonstrative pronouns / determiners.

#### Examples

* [ro] _însuși_
* [cs] _sám_
* [en] _himself_ as in “He himself did it.”

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
