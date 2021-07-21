---
layout: feature
title: 'InflClass[nominal]'
shortdef: 'nominal inflectional class of nominal verbal forms'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#IndEurA">IndEurA</a></td>
  <td><a href="#IndEurO">IndEurO</a></td>
  <td><a href="#IndEurX">IndEurX</a></td>
  <td><a href="#IndEurI">IndEurI</a></td>
  <td><a href="#IndEurU">IndEurU</a></td>
  <td><a href="#Ind">Ind</a></td>
</tr>
</table>

The `nominal` layer for `InflClass` uses the same values as [`InflClass`](la-feat/InflClass) to distinguish the declensions of nominal forms of verbs, whose first-layer `InflClass` already refers to a conjugation class. It can thus be observed that nominal forms of verbs belong to two inflectional paradigms at the same time.

* Overview of possible `InflClass[nominal]` values with the verb *amo* 'to love' (`InflClass=LatA`) as an example:

[Nominal form(s)](la-feat/VerbForm) | Reference form(s) | `InflClass[nominal]` | Notes
--|--|--|--
Perfect/future participle, gerundive/gerund  | *amatus*, *amaturus*, *amandus* | `IndEurA` or `IndEurO`, according to [`Gender`](la-feat/Gender) (`Fem` and `Masc`/`Neut` respectively) | Like first-class [adjectives](la-pos/ADJ)
Present participle  | *amans*  | `IndEurI` | Like most second-class adjectives and third-declension [nouns](la-pos/NOUN) with *i* stem
Supine   | *amatu*  | `IndEurU` | Only appears in the ablative and accusative [cases](la-feat/Case)
Present/perfect infinitives   | *amare*, *amari*, *amauisse*  | `Ind` | Indeclinable verbal noun

*(Note: in the following m = masculine gender, f = feminine, n =neuter.)*

### <a name="IndEurA">`IndEurA`</a>: first declension of nominal forms

Perfect and future [participles](la-feat/VerbForm), gerundives, and all [superlative](la-feat/Degree) forms thereof (not all equally attested, but possible) follow the first declension in the feminine (like first-class [adjectives](la-pos/ADJ)).

* Example: *amo* 'to love'

[Nominal form(s)](la-feat/VerbForm) | Nominative singular form (f)
--|--
Perfect participle | *amata* 
Future participle | *amatura*
Gerundive | *amanda*
Superlatives | *amatissima*, *amaturissima*, *amandissima* 

#### Examples

* ***uisae*** 'seen (gen./dat. sing. f., nom./voc. plur. f.)'
* ***moritura*** '(who/which is) going to die (nom./voc./abl. sing. f.)'
* ***delendis*** '(who/which has) to be obliterated (dat./abl. plur. f.)'
* ***uigilantissimarum*** 'most watchful (gen. plur. f.)'

### <a name="IndEurO">`IndEurO`</a>: second declension of nominal forms

Perfect and future [participles](la-feat/VerbForm), gerundives/gerunds, and all [superlative](la-feat/Degree) forms thereof (not all equally attested, but possible) follow the second declension in the masculine/neuter (like first-class [adjectives](la-pos/ADJ)).

* Example: *amo* 'to love'

[Nominal form(s)](la-feat/VerbForm) | Nominative singular forms (m/n)
--|--
Perfect participle | *amatus*/*amatum* 
Future participle | *amaturus*/*amaturum*
Gerundive | *amandus*/*amandum*
Superlatives | *amatissimus*/*amatissimum*, *amaturissimus*/*amaturissimum*, *amandissimus*/*amandissimum* 

#### Examples

* ***uisi*** 'seen (gen. sing. m./n., nom./voc. plur. m.)'
* ***moriturus*** '(who/which is) going to die (nom. sing. m.)'
* ***delendis*** '(who/which has) to be obliterated (dat./abl. plur. m./n.)'
* ***uigilantissimorum*** 'most watchful (gen. plur. m.)'

### <a name="IndEurX">`IndEurX`</a>: third declension of nominal forms (consonant stems)

Only [comparative](la-feat/Degree) forms of participles and gerundives (not all equally attested, but possible) show this declension type for all three genders. 

* Example: *amo* 'to love'

[Nominal form(s)](la-feat/VerbForm) | Nominative singular forms (m/f/n) 
--|--
Present participle | *amantior*/*amantior*/*amantius*
Perfect participle | *amatior*/*amatior*/*amatius*
Future participle | *amaturior*/*amaturior*/*amaturius*
Gerundive | *amandior*/*amandior*/*amandius*

#### Examples

* ***uidentioris*** 'more seeing (gen. sing. m./f./n.)'
* ***secutior*** 'more followed (nom. sing. m./f.)'
* ***deleturius*** 'more (going) to be obliterated (nom./acc./voc. sing. n.)'
* ***uigilandioribus*** 'to be more watched over (dat./abl. plur. m./f./n.)'


### <a name="IndEurI">`IndEurI`</a>: third declension of nominal forms (*i* stems)

Present [participles](la-feat/VerbForm) (like second-class [adjectives](la-pos/ADJ)) follow the third *i*-stem declension for all three genders.

* Example: *amo* 'to love'

[Nominal form(s)](la-feat/VerbForm) | Nominative singular forms (m/f/n)
--|--
Present participle | *amans*/*amans*/*amans* 

#### Examples

* ***uidentium*** 'seeing (gen. plur. m./f./n.)'

### <a name="IndEurU">`IndEurU`</a>: fourth declension of nominal forms

The [supine](la-feat/VerbForm) is a defective verbal noun belonging to the fourth declension, appearing only in the accusative and ablative cases.

* Example: *amo* 'to love'

[Nominal form(s)](la-feat/VerbForm) | Forms
--|--
Supine | *amatum*, *amatu*

#### Examples

* ***uisu*** 'with regard to seeing [smth.] (abl.)' 
* ***scriptum*** '[going/coming/... somewhere to] write (acc.)'


### <a name="Ind">`Ind`</a>: indeclinable nominal forms

All infinitives are indeclinable verbal nouns (and they are not marked for `Case`, `Gender` nor `Number`).

* Example: *amo* 'to love'

[Nominal form(s)](la-feat/VerbForm) | Form 
--|--
Present active infinitive | *amare*
Present passive infinitive | *amari*
Perfect (active) infinitive | *amauisse*
[Future active infinitive (archaic) | **amassere* ]

#### Examples

* ***uidēre*** 'to see'
* ***sequi*** 'to follow' ([deponent](la-feat/Voice) verb)
* ***audiuisse*** 'to have heard'
* ***deargentassere*** 'to be going to deprive of money' (Lucil., Sat. 682)

<!-- Interlanguage links updated Pá kvě 14 11:08:33 CEST 2021 -->
