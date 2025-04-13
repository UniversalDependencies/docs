---
layout: feature
title: 'Case'
shortdef: 'case'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>¨¨
  <td><a href="#Nom">Nom</a></td>
  <td><a href="#Loc">Loc</a></td>
  <td><a href="#Acc">Acc</a></td>
  <td><a href="#Abl">Abl</a></td>
  <td><a href="#Voc">Voc</a></td>
</tr>
</table>

Case is an inflectional feature of nouns and infinitives
and also of adjectives, participles, some pronouns and some numerals
that agree with them.
It is also valency feature of prepositions (saying that
the preposition requires its argument to be in that case).
There are five values of case: direct, locative, oblique, ablative and vocative.

<!--
There are always at most three forms in the singular, because of shared forms.
The forms can be shared in various ways depending on the declension class:
* 1 form: DOAV
* 2 forms: DO / AV
* 2 forms: D / OAV
* 2 forms: DAV / O
* 3 forms: D / O / AV
* 3 forms: D / OA / V

The direct plural has either its unique form or a shared form with oblique singular
(and possibly also with other singular cases).
The obliqe, ablative and vocative cases in the plural always (except of some indeclinable borrowings)
merge into one form, different from the singular and the direct plural. This form ends in an characteristic
ending و _o_, usually not occurring with other forms.
The ablative and vocative singular share almost always the same form, they differ only in one adjectival masculine pattern.
For nouns, they may differ only in non-standard language.

Example of a noun with five different forms: تول _tol_ “weight”
<table border="1">
<tr>
  <td/>
  <td align="middle"><b>Singular</b></td>
  <td align="middle"><b>Plural</b></td>
</tr>
<tr>
  <td align="middle"><b>Direct</b></td>
  <td align="middle">تول<br/>tol</td>
  <td align="middle">تولونه<br/>tolúna</td>
</tr>
<tr>
  <td align="middle"><b>Oblique</b></td>
  <td align="middle">تالۀ<br/>tâlë́</td>
  <td align="middle" rowspan="3">تولونو<br/>tolúno</td>
</tr>
<tr>
  <td align="middle"><b>Ablative</b></td>
  <td align="middle" rowspan="2">توله<br/>tóla</td>
</tr>
<tr>
  <td align="middle"><b>Vocative</b></td>
</tr>
</table>
-->


### <a name="Nom">`Nom`</a>: direct

The direct case (tagged as nominative in UD) is the base form of declinable parts of speech.
It serves as a lemma.
It is used for subjects or objects except the cases described below for the oblique.
It is used also for nominal parts of nominal predicates, non-prepositional nominal modifiers
temporal ranges and in several other cases.
<!--
* Other occurrences of the direct and oblique case are generally accompanied by an adposition, altghough various exceptions of nominals in the bare direct and oblique case, that are not a core argument, may exist:
  * Temporal range (دوه ساعته خوب کوم _dwa **sâáta** xob kawë́m_ “I sleep for two hours”).
  * Nominal part of a light verb !!!
  * Fixed phrases.
TODO doplnit priklady
-->

#### Examples
* (a) **زلمی هلک** _**zalmáy halë́k**_ “young boy”
* (b) **ړنده پېغله** _**ṛandá péġla**_ “blind girl”
* (c) **نوي کورونه** _**në́wi korúna**_ “new houses”
* (d) **سړی** راځي _**saṛáy** rấżi_ “the man comes”
* (e) **سړی** راځي _**saṛáy** rấżi_ “the man comes”


### <a name="Acc">`Acc`</a>: oblique

The oblique case (tagged as accusative in UD) is used for all subjects of active transitive verbs in past tenses
and for pronouns ما _mâ_ “me” and تا _tâ_ “you (sg)” in the object position in non-past tenses.
It is also used also with many adpositions or in fixed phrases.

Singular formation from the direct case:
* **Some** masculine nouns and adjectives with zero ending, may take a stressed ۀ _ë́_
  and/or undergo a vowel change in the preceding syllable.
* Masculine nouns and adjectives ending in ی _ay/y_ change the ending to ي _i_.
* Feminine nouns and adjectives with zero ending take an unstressed ې _e_.
* Feminine nouns and adjectives ending in ه _a_ change the ending to ې _e_.
* Other nouns and adjectives (both masculine and feminine) remain unchanged.

Plural formation from the direct case (for both masculine and feminine):
* Nouns and adjectives ending in a consonant take an unstressed و _o_.
* Nouns and adjectives ending in a vowel change the ending to و _o_ (keeping the stress position).
  * Moreover, masculine nouns ending in a stressed ۀ _ë́_ with a vowel ا _â_ in the preceding syllable,
    change this vowel to a not written _a_.

#### Examples
* د **زلمي هلک** _dë **zalmí halë́k**_ “of the young boy”
* د **ړندې پېغلې** _dë **ṛandé péġle**_ “of the blind girl”
* د **نوو کورونو** _dë **në́wo korúno**_ “of the new houses”

### <a name="Loc">`Loc`</a>: locative

The locative case is used with a few adpositions.
It is often not considered a separate case, because it always shares the same form
with either direct or oblique case.



#### Examples

### <a name="Abl">`Abl`</a>: ablative

The ablative case (called also oblique II) is used with a few prepositions with the meaning “from” or “out of”.

It almost always shares the form with the vocative, only
masculine singular adjectives ending in the direct case in ی _ay/y_,
change the ending to ي _i_ as in the oblique, instead of یه _aya/ya_
as in the vocative.

#### Examples
* له **زلمي هلکه** _la **zalmí halë́ka**_ “from the young boy”
* له **ړندې پېغلې** _la **ṛandé péġle**_ “from the blind girl”
* له **نوو کورونو** _la **në́wo korúno**_ “from the new houses”



### <a name="Voc">`Voc`</a>: vocative

The vocative case is used to address someone.

Masculine singular nouns and adjectives ending in consonant take an unstressed ه _a_.
Other nouns and adjectives (all masculine/feminine, singular/plural) share the form with the oblique.

#### Examples
* **زلمیه هلکه**، دلته راشه _**zalmáya halë́ka**, dë́lta rấša_ “young boy, come here”
* **ړندې پېغلې**، دلته راشه _**ṛandé péġle**, dë́lta rấša_ “blind girl, come here”
* **نوو کورونو**، دلته راشه _**në́wo korúno**, dë́lta rấša_ “new houses, come here”

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:09:33 CET -->
