---
layout: feature
title: 'Number'
shortdef: 'number'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Coll">Coll</a></td>
  <td><a href="#Count">Count</a></td>
  <td><a href="#Dual">Dual</a></td>
  <td><a href="#Grpa">Grpa</a></td>
  <td><a href="#Grpl">Grpl</a></td>
  <td><a href="#Inv">Inv</a></td>
  <td><a href="#Pauc">Pauc</a></td>
  <td><a href="#Plur">Plur</a></td>
  <td><a href="#Ptan">Ptan</a></td>
  <td><a href="#Sing">Sing</a></td>
  <td><a href="#Tri">Tri</a></td>
</tr>
</table>

`Number` is usually an inflectional feature of [nouns](u-pos/NOUN) and,
depending on language, other parts of speech ([pronouns](u-pos/PRON),
[adjectives](u-pos/ADJ), [determiners](u-pos/DET), [numerals](u-pos/NUM),
[verbs](u-pos/VERB)) that mark agreement with nouns.

### <a name="Sing">`Sing`</a>: singular number

A singular noun denotes one person, animal or thing.

#### Examples

* [en] _<b>car</b>_

### <a name="Plur">`Plur`</a>: plural number

A plural noun denotes several persons, animals or things.

#### Examples

* [en] _<b>cars</b>_

### <a name="Dual">`Dual`</a>: dual number

A dual noun denotes two persons, animals or things.

#### Examples

* [sl] singular _glas_ "voice", dual _<b>glasova</b>_ "voices", plural
  _glasovi_ "voices"
* [ar] singular سَنَةٌ _sanatun_ "year", dual <b>سَنَتَانِ
  _sanatāni_</b> "years", plural سِنُونَ _sinūna_ "years".

### <a name="Tri">`Tri`</a>: trial number

A trial pronoun denotes three persons, animals or things.
It occurs in pronouns of several Austronesian languages.

### <a name="Pauc">`Pauc`</a>: paucal number

A paucal noun denotes “a few” persons, animals or things.

### <a name="Grpa">`Grpa`</a>: greater paucal number

A greater paucal noun denotes “more than several but not many” persons, animals or things.
It occurs in Sursurunga, an Austronesian language.

### <a name="Grpl">`Grpl`</a>: greater plural number

A greater plural noun denotes “many, all possible” persons, animals or things.
Precise semantics varies across languages.

### <a name="Inv">`Inv`</a>: inverse number

Inverse number means non-default for that particular noun. (Some nouns are by
default assumed to be singular, some plural.) Occurs e.g. in Kiowa.

### <a name="Count">`Count`</a> count plural

Attested in Bulgarian and Macedonian. It is known variously as “counting form”,
“count plural” or “quantitative plural” (Sussex and Cubberley 2006, p. 324).
It is a special plural form of nouns if they occur after numerals.
(The form originates in the Proto-Slavic dual but it should not be marked
`Number=Dual` because 1. the dual vanished from Bulgarian and 2. the form is
no longer semantically tied to the number two.)

#### Examples

* [bg] _tri <b>stola</b>_ “three chairs” vs. _stolove_ “chairs”

### <a name="Ptan">`Ptan`</a>: plurale tantum

Some nouns appear only in the plural form even though they denote one
thing (semantic singular); some tagsets mark this distinction.
Grammatically they behave like plurals, so `Plur` is obviously the
back-off value here; however, if the language also marks gender, the
non-existence of singular form sometimes means that the gender is
unknown. In Czech, special type of numerals is used when counting
nouns that are plurale tantum ([NumType]() = Sets).

#### Examples

* [en] _<b>scissors, pants</b>_
* [cs] _<b>nůžky, kalhoty</b>_

### <a name="Coll">`Coll`</a>: collective / mass / singulare tantum

Collective or mass or singulare tantum is a special case of
singular. It applies to words that use grammatical singular to
describe sets of objects, i.e. semantic plural. Although in theory
they might be able to form plural, in practice it would be rarely
semantically plausible. Sometimes, the plural form exists and means
"several sorts of" or "several packages of".

#### Examples

* [cs] _<b>lidstvo</b>_ "mankind"

### References

* Sussex, Roland and Cubberley, Paul. 2006. _The Slavic Languages._ Cambridge University Press.

