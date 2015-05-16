---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
---

This feature typically applies to [pronouns](u-pos/PRON),
[determiners](u-pos/DET), pronominal [numerals](u-pos/NUM)
(quantifiers) and pronominal [adverbs](u-pos/ADV).

### `Prs`: personal or possessive personal pronoun or determiner

See also the [Poss]() feature that distinguishes normal personal
pronouns from possessives. Note that `Prs` also includes reflexive
personal/possessive pronouns (see the [Reflex]() feature).

#### Examples

* Personal pronouns: _Uno di <b>loro</b>_ "One among them", _Per <b>lui</b> è utile_ "For him it's useful"
* Possessive pronouns (`Poss=Yes`): _La <b>sua</b> è migliore_ "Hers is better", _I <b>suoi</b> sono felici_ "Her/his [parents] are happy" 
* Possessive determiners/adjectives (`Poss=Yes`): _La <b>sua</b> scuola è migliore_ "Her/his school is better", _I <b>loro</b> amici_ "Their friends".

Note: the category clitic pronouns includes cases such as: _<b>Si</b> è trasformato_ "Has transformed itself" (reflexive), _<b>Ti</b> ho dato_ "I have given you" (indirect object), _Ora <b>si</b> cerca il colpevole_ "Now one/somebody searches for the culprit" (impersonal form), _<b>Lo</b> vediamo spesso_ "We often see him/it". These are not marked by the appropriate `PronType`. 

### `Rcp`: reciprocal pronoun

We do not seem to have cases of reciprocal pronouns in Italian.

### `Art`: article

Article is a special case of determiner that bears the feature of
[definiteness](Definite).

#### Examples

* Definite articles (`Definite=Def`): _<b>La</b> luna_ "The moon", _I regali di Natale_ "Christmas presents" 
* Indefinite articles (`Definite=Ind`): _<b>Un</b> amico_ "A friend", _<b>Una</b> sorpresa_ "A surprise"

### `Int`: interrogative pronoun, determiner, numeral or adverb

Note that possessive interrogative determiners (_whose_) can be
distinguished by the [Poss]() feature.

#### Examples: 

* Interrogative pronouns: _<b>Chi</b> è il presidente?_ "Who is the president?"
* Interrogative determiners: _<b>Che</b> cosa faremo adesso?_ "What shall we do now?", _<b>Quale</b> libro hai letto?_ "Which book did you read?"

Note: for the time being we do not use the feature `ProntType=Int` interrogative pronouns such as _dove_ "where" and _quando_ "when" in sentences like _<b>Dov'</b> è Siena?_ "Where is Siena?".
 
### `Rel`: relative pronoun, determiner, numeral or adverb

#### Examples: 

* Relative pronouns: _La strada <b>che</b> porta al mare_ "The road which leads to the sea", _Il libro <b>che</b> ho letto_ "The book that I read".
* Relative determiners: _Un autore sul <b>cui</b> futuro puoi scommettere_ "An author on whose future you can bet".


### `Dem`: demonstrative pronoun, determiner, numeral or adverb

These are often parallel to interrogatives. Some tagsets might also
distinguish a separate feature of distance (_here / there_; [es] _aquí
/ ahí / allí_).

#### Examples

* Demonstrative pronouns: _Per <b>questo</b> sono ambiziosi_ "For this [reason] they are ambitious".
* Demonstrative determiners: _Parte di <b>questo</b> denaro_ "Part of this money".

Note: Demonstrative adverbs such as _qui_ "here" and _là_ "there", _ora_ "now" e _allora_ "then" are not marked with `PronType=Dem`.

### `Tot`: total (collective) pronoun, determiner or adverb

#### Examples

We are not using `PronType=Tot`.

### `Neg`: negative pronoun, determiner or adverb

Examples: 

We distinguish only negative adverbs such as: _non_, _nemmeno, _neppure_.

### `Ind`: indefinite pronoun, determiner, numeral or adverb

#### Examples

* Indefinite pronouns: _uno_ "one", _tutti_ "everybody", _ognuno_ "each one", _chiunque_ "anybody", _qualcosa_ "something", _qualcuno_ "somebody"
* indefinite determiners: _tutti_ "all", _qualche_ "some", _ogni_ "each", _alcuni_ "some", _diversi_ "several"


