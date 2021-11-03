---
layout: feature
title: 'InflClass'
shortdef: 'inflectional class'
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
  <td><a href="#IndEurE">IndEurE</a></td>
  <td><a href="#LatPron">LatPron</a></td>
  <td><a href="#LatA">LatA</a></td>
  <td><a href="#LatE">LatE</a></td>
  <td><a href="#LatX">LatX</a></td>
  <td><a href="#LatI">LatI</a></td>
  <td><a href="#LatI2">LatI2</a></td>
  <td><a href="#LatAnom">LatAnom</a></td>
  <td><a href="#Ind">Ind</a></td>
</tr>
</table>

Latin distinguishes two main types of inflections: nominal and verbal.

Nominal inflection is traditionally called *declension* and applies to ([proper](la-pos/PROPN)) [nouns](la-pos/NOUN), [adjectives](la-pos/ADJ), [pronouns](la-pos/PRON), [determiners](la-pos/DET) and [numerals](la-pos/NUM), and can express [gender](la-feat/Gender), [number](la-feat/Number), [case](la-feat/Case) and [degree](la-feat/Degree). It also applies to [nominal forms](la-feat/VerbForm) of verbs, for which an [additional layer](la-feat/InflClass-nominal) is used.

Verbal inflection is traditionally called *conjugation* and applies to [finite and nominal forms](la-feat/VerbForm) of [verbs](la-pos/VERB) and the [auxiliary](la-pos/AUX) *sum*, and can express [aspect](la-feat/Aspect), [mood](la-feat/Mood), [tense](la-feat/Tense), [voice](la-feat/Voice), [person](la-feat/Person), [number](la-feat/Number) and [nominal form](la-feat/VerbForm).

[Adverbs](la-pos/ADV), [adpositions](la-pos/ADP), [co-ordinating](la-pos/CCONJ) and [subordinating](la-SCONJ) conjunctions, the various [particles](la-pos/PART) and [interjections](la-pos/INTJ) are all invariable parts of speech and never inflect in Latin. 

Nominal and verbal inflections are themselves respectively subdivided into different declension and conjugation classes, which historically result from the development of Latin from Proto-Indo-European and were determined by phonological and analogical processes. Basically, the endings of a class were shaped by the final consonant or vowel of the original stem, and parallel outcomes can be observed, synchronically or diachronically, in most of the other Indo-European branches. 

The values of `InflClass` reflect the original endings of the stems where possible; moreover, the string `IndEur` is prepended to those classes which have parallels in other Indo-European languages (hopefully making them reusable by other treebanks, too), while `Lat` specifies a class whose pattern is probably confined to Latin (and its daughter languages) only.

The class `Ind` for indeclinable words is universal (as it is a sort of "non-class"), and is only applied to members of part-of-speech classes which protoypically inflect, but not to protoypically invariable elements (such as conjunctions). 

`InflClass` is kept distinct from [`NounClass`](u-feat/NounClass) (used for Bantu languages), because the latter involves agreement between a phrasal head and its dependents. On the contrary, inflectional classes in Latin are orthogonal to grammatical categories such as gender, tense, etc., although some correlations exist. 

Some Latin words inherit Greek inflectional classes: these are assigned to an existing `InflClass`, but marked for [`Variant=Greek`](la-feat/Variant). 

*(Remark: Locative is not shown in the following tables, as it is marginal in the case system.)*

### <a name="IndEurA">`IndEurA`</a>: first declension

Originating from stems terminating in *-a*. Mostly tied to the feminine gender, but a relevant portion of first-declension masculine [nouns](la-pos/NOUN) exist. First-class [adjectives](la-pos/ADJ) (including perfect and future [participles](la-feat/VerbForm) and gerundives) and all [superlative](la-feat/Degree) forms follow the first declension in the feminine.

* Example overview by case and number: *rosa* 'rose'

[Case](la-feat/Case) | [Singular](la-feat/Number) | Plural 
--|--|--
Nominative   | *rosă* | *rosae*
Genitive   | *rosae* | *rosarum* 
Dative  | *rosae* | *rosis* 
Accusative   | *rosam* | *rosas* 
Vocative   | *rosă* | *rosae* 
Ablative | *rosā* | *rosis* 


In other Indo-European branches: gr. *θάλασσα*, icel. *borg*, lith. *gatvė*

#### Examples

* ***rosam*** 'rose (acc. sing. f.)'
* ***piratae*** 'of/to a pirate (gen./dat. sing. m.); pirates (nom./voc. plur. m.)'
* ***mystes*** 'priest of secret rites (nom. sing. m.)' ([Greek](la-feat/Variant) variant)
* ***pulchrā*** 'beautiful (nom./voc./abl. sing. f.)'
* ***facillimarum*** 'most simple (gen. plur. f.)' 

### <a name="IndEurO">`IndEurO`</a>: second declension

Originating from stems terminating in *-e/o*. Mostly tied to the masculine and neuter genders, but some feminine [nouns](la-pos/NOUN) in *-us* (mostly tree names) exist. First-class [adjectives](la-pos/ADJ) (including perfect and future [participles](la-feat/VerbForm) and gerundives/gerunds) and all [superlative](la-feat/Degree) forms follow the second declension in the masculine and neuter.

* Example overview by case and number: *lupus* 'wolf', *templum* 'temple' (neuter)

[Case](la-feat/Case) | [Singular](la-feat/Number) | Plural | Singular | Plural
--|--|--|--|--
Nominative   | *lupus* | *lupi* | *templum* | *templa* 
Genitive   | *lupi* | *luporum* | *templi* | *templorum* 
Dative  | *lupo* | *lupis* | *templo* | *templis* 
Accusative   | *lupum* | *lupos* | *templum* | *templa* 
Vocative   | *lupe* | *lupi* | *templum* | *templa* 
Ablative | *lupo* | *lupis* | *templo* | *templis* 


In other Indo-European branches: gr. *άνθρωπος*, icel. *íslenskur*, lith. *miškas*

#### Examples

* ***lupum*** 'wolf (acc. sing. m.)'
* ***scutorum*** 'of shields (gen. plur. n.)'
* ***melos*** 'tune (nom./acc. sing. n.)' ([Greek](la-feat/Variant) variant)
* ***pulchro*** 'beautiful (dat./abl. sing. m./n.)'
* ***facillimorum*** 'most simple (gen. plur. m./n.)' 

### <a name="IndEurX">`IndEurX`</a>: third declension (consonant stems)

Originating from stems terminating in a consonant ("athematic"). Every gender is represented. Pretty much confined to [nouns](la-pos/ADJ) and [comparative](la-feat/Degree) forms, with few second-class [adjectives](la-pos/ADJ) represented. 

* Example overview by case and number: *rex* 'king', *tempus* 'time' (neuter)

[Case](la-feat/Case) | [Singular](la-feat/Number) | Plural | Singular | Plural
--|--|--|--|--
Nominative   | *rex* | *reges* | *tempus* | *tempora* 
Genitive   | *regis* | *regum* | *temporis* | *temporum* 
Dative  | *regi* | *regibus* | *tempori* | *temporibus* 
Accusative   | *regem* | *reges* | *tempus* | *tempora* 
Vocative   | *rex* | *reges* | *tempus* | *tempora* 
Ablative | *rege* | *regibus* | *tempore* | *temporibus* 


In other Indo-European branches: gr. *θώραξ*, icel. *maður*, lith. *sesuo*

#### Examples

* ***imperatorem*** 'emperor (acc. sing. m.)', nom. sing. *imperator*
* ***artificibus*** 'to/from masters of the art (dat./abl. plur. m.)', nom. sing. *artifex*
* ***uiscera*** 'entrails (nom./acc. plur. n.)' , nom. sing. *viscus*
* ***pulchriores*** 'more beautiful (nom./acc. plur. m./f.)'
* ***ueteri*** 'old (dat. sing. m./f./n.)' 

### <a name="IndEurI">`IndEurI`</a>: third declension (*i* stems)

Originating from stems terminating in *-i*. Every gender is represented. Nearly all second-class [adjectives](la-pos/ADJ) (including present [participles](la-feat/VerbForm)), some determiners and some numerals also follow this declension.

* Example overview by case and number: *ciuis* 'citizen', *animal* 'animal' (neuter)

[Case](la-feat/Case) | [Singular](la-feat/Number) | Plural | Singular | Plural
--|--|--|--|--
Nominative   | *ciuis* | *ciues* | *animal* | *animalia* 
Genitive   | *ciuis* | *ciuium* | *animalis* | *animalium* 
Dative  | *ciui* | *ciuibus* | *animali* | *animalibus* 
Accusative   | *ciuem* | *ciues* | *animal* | *animalia* 
Vocative   | *ciuis* | *ciues* | *animal* | *animalia* 
Ablative | *ciue* | *ciuibus* | *animali* | *animalibus* 

#### Examples

* ***ciuem*** 'citizen (acc. sing. m./f.)', nom. sing. *ciuis*
* ***marĭa*** 'seas (nom./acc. plur. n.)', nom. sing. *mare*
* ***apocalypseon*** 'of apocalypses (gen. plur. f.)' ([Greek](la-feat/Variant) variant), nom. sing. *apocalypsis*
* ***possibili*** 'possible (abl./dat. sing. m./f./n.)', nom. sing. *possibilis*
* ***omnis*** 'all (nom./voc. sing. m./f., gen. sing. m./f./n.)' 
* ***tribus*** 'three (dat./abl. plur. m./f./n.)', nom. sing. m./f. *tres*

### <a name="IndEurU">`IndEurU`</a>: fourth declension

Originating from stems terminating in *-u*. Mostly tied to the masculine, but some feminine [nouns](la-pos/NOUN) in *-us* and neuter nouns in *-u* exist. Pretty much confined to [nouns](la-pos/ADJ) and the [supine](la-feat/VerbForm).

* Example overview by case and number: *fructus* 'fruit', *cornu* 'horn' (neuter)

[Case](la-feat/Case) | [Singular](la-feat/Number) | Plural | Singular | Plural
--|--|--|--|--
Nominative   | *fructŭs* | *fructūs* | *cornū* | *cornua* 
Genitive   | *fructūs* | *fructuum* | *cornūs* | *cornuum* 
Dative  | *fructui* | *fructibus* | *cornui* | *cornibus* 
Accusative   | *fructŭm* | *fructūs* | *cornū* | *cornua* 
Vocative   | *fructŭs* | *fructūs* | *cornū* | *cornua* 
Ablative | *fructū* | *fructibus* | *cornū* | *cornibus* 


In other Indo-European branches: lith. *Vilnius*

#### Examples

* ***manuum*** 'of hands (gen. plur. f.)'
* ***acubus*** 'to/from needles' (dat./abl. plur. f.)

### <a name="IndEurE">`IndEurE`</a>: fifth declension

Originating from stems terminating in *-e*. Pretty much restricted to feminine [nouns](la-pos/ADJ).

* Example overview by case and number: *res* 'thing'

[Case](la-feat/Case) | [Singular](la-feat/Number) | Plural 
--|--|--
Nominative   | *res* | *res*
Genitive   | *rei* | *rerum*  
Dative  | *rei* | *rebus*
Accusative   | *rem* | *res*  
Vocative   | *res* | *res*
Ablative | *re* | *rebus* 

#### Examples

* ***barbariei*** 'of/to a foreign country (gen./dat. sing. f.)'

### <a name="LatPron">`LatPron`</a>: pronominal declension

Restricted to most of the (non-personal) pronouns and determiners. It is very similar (and clearly correlated) to the alternation between `IndEurA` ("first") and `IndEurO` ("second") declensions found in first-class [adjectives](la-pos/ADJ), but deviates from it principally under the following aspects:

* in the singular, for all [genders](la-feat/Gender), it characteristically shows the same form in the genitive and dative cases;
    * this trait is the only one to be common to all elements taking this inflectional class, and for some of them it has probably arisen in analogy to protoypical members (e.g. *ille* 'that (one)', *qui* 'who/which/that') 
* singular nominative/accusative neuter forms end in *-d*;
* singular nominative masculine forms may lack the typical *-s* suffix found in nominals (see other declensions).

Many words belonging to this inflectional class also (or, in some cases, only) appear with a [clitic](la-feat/Clitic)-like suffix adjoined to the inflected form, and which contributes to semantic or pragmatic nuances (e.g. *eadem* 'the same (one)' with respect to *ea* 'she'), like [emphasis](la-feat/Emphatic).

In future, this inflectional class may be revised and limited only to deviant forms, whith the others taking a "regular" `IndEurA`, `IndEurO` or `IndEurI` value.
 
* Example overview by case and number: *qui*, relative pronoun

[Case](la-feat/Case) | [Singular](la-feat/Number) | Plural 
--|:--:|:--:
Nominative   | <i>qu**i**</i>, *quae*, *quo**d*** | *qui*, *quae*, *quae*
Genitive   | ***cuius*** | *quorum*, *quarum*, *quorum*  
Dative  | ***cui*** | *quibus*
Accusative   | *quem*, *quam*, *quod* | *quos*, *quas*, *quae*
Ablative | *quo*, *qua*, *quo* | *quibus* 

#### Examples

* ***solius*** 'only (gen. sing. m./f./n.)'
* ***illis*** 'those (dat./abl. plur. m./f./n.)'

### <a name="LatA">`LatA`</a>: first conjugation

Stems with thematic vowel *a* (resulting from the convergence of different verbal stems).

* Example overview of [**imperfective**](la-feat/Aspect) forms (in the 2nd person singular active or masculine nominative singular where applicable): *amo* 'to love'

Tense & Mood / Nominal form | |
--|--
Present indicative   | *amas* 
Past indicative   | *amabas* 
Future indicative   | *amabis* 
Present subjunctive   | *ames* 
Past subjunctive   | *amares* 
Present imperative  | *ama* 
Future imperative  | *amato* 
Present participle  | *amans* 
Gerundive  | *amandus* 
Infinitive   | *amare* 

#### Examples

* ***amaui*** 'I have loved'

### <a name="LatE">`LatE`</a>: second conjugation

Stems with thematic vowel *e* (resulting from the convergence of different verbal stems).

* Example overview of [**imperfective**](la-feat/Aspect) forms (in the 2nd person singular active or masculine nominative singular where applicable): *uideo* 'to see'

Tense & Mood / Nominal form | |
--|--
Present indicative   | *uides* 
Past indicative   | *uidebas* 
Future indicative   | *uidebis* 
Present subjunctive   | *uideas* 
Past subjunctive   | *uideres* 
Present imperative  | *uide* 
Future imperative  | *uideto* 
Present participle  | *uidens* 
Gerundive  | *uidendus* 
Infinitive   | *uidere* 

#### Examples

* ***uīdi*** 'I have seen'

### <a name="LatX">`LatX`</a>: third conjugation

Supposedly athematic stems (or *ĭ* stems as sometimes postulated).

* Example overview of [**imperfective**](la-feat/Aspect) forms (in the 2nd person singular active or masculine nominative singular where applicable): *lego* 'to read'

Tense & Mood / Nominal form | |
--|--
Present indicative   | *legis* 
Past indicative   | *legebas* 
Future indicative   | *leges* 
Present subjunctive   | *legas* 
Past subjunctive   | *legeres* 
Present imperative  | *lege* 
Future imperative  | *legĭto* 
Present participle  | *legens* 
Gerundive  | *legendus* 
Infinitive   | *legĕre* 

#### Examples

* ***lēgi*** 'I have read'

### <a name="LatI">`LatI`</a>: fourth conjugation

Stems with thematic vowel *i* (resulting from the convergence of different verbal stems).

* Example overview of [**imperfective**](la-feat/Aspect) forms (in the 2nd person singular active or masculine nominative singular where applicable): *audio* 'to hear'

Tense & Mood / Nominal form | |
--|--
Present indicative   | *audis* 
Past indicative   | *audiebas* 
Future indicative   | *audies* 
Present subjunctive   | *audias* 
Past subjunctive   | *audires* 
Present imperative  | *audi* 
Future imperative  | *audīto* 
Present participle  | *audiens* 
Gerundive  | *audiendus* 
Infinitive   | *audire* 

#### Examples

* ***audiui*** 'I have heard'

### <a name="LatI2">`LatI2`</a>: mixed conjugation

The "fifth" or "mixed" conjugation arose from the fourth conjugation on the basis of rythmical grounds, and differs from it only with regard to few forms.

* Example overview of [**imperfective**](la-feat/Aspect) forms (in the 2nd person singular active or masculine nominative singular where applicable): *capio* 'to seize'

Tense & Mood / Nominal form | |
--|--
Present indicative   | *capis* 
Past indicative   | *capiebas* 
Future indicative   | *capies* 
Present subjunctive   | *capias* 
Past subjunctive   | *capĕres* 
Present imperative  | *capĕ* 
Future imperative  | *capĭto* 
Present participle  | *capiens* 
Gerundive  | *capiendus* 
Infinitive   | *capĕre* 

#### Examples

* ***cēpi*** 'I have seized'

### <a name="LatAnom">`LatAnom`</a>: anomalous inflection

Some inflectional patterns, especially of some verbs and personal pronouns, show irregularities that cannot be fully traced back to other classes, and are therefore labelled as "anomalous" (as in *uerbum anomalum*, i.e. 'irregular verb').

* Example overview by case and number: the [personal](la-feat/PronType) pronoun *ego* 'I'

[Case](la-feat/Case) | [Singular](la-feat/Number) | Plural 
--|--|--
Nominative   | *ego* | *nos*
(Genitive   | *mei* | *nostri*)
Dative  | *mihi* | *nobis*
Accusative   | *me* | *nos*  
Ablative | *me* | *nobis* 

(*nos* 'we' can be also directly lemmatised as *nos*.)

* Example overview of [**imperfective**](la-feat/Aspect) forms (in the 2nd person singular active or masculine nominative singular where applicable): *uolo* 'to want'

Tense & Mood / Nominal form | |
--|--
Present indicative   | *uis* 
Past indicative   | *uolebas* 
Future indicative   | *uoles* 
Present subjunctive   | *uelis* 
Past subjunctive   | *uelles* 
Present participle  | *uolens* 
Infinitive   | *uelle* 


#### Examples

* ***tibi*** 'to you (dat. sing.)', nom. sing. *tu*
* ***fert*** '(he/she/it) carries', 1st pers. sing. ind. pres. act. *fero*

There are no anomalous nouns (including proper nouns), adjectives, or determiners: when not simply indeclinable (see **`Ind`**), their deviant forms can unproblematically be considered just variants inside their inflectional paradigms (e.g. *animabus* instead of *animis* for the plural dative/ablative of *anima*, first declension).

### <a name="Ind">`Ind`</a>: indeclinable

A word belonging to a part of speech whose members are usually expected to inflect, but which itself does not (or is never attested in more than one form), receives the value `Ind`. At the same time, it is not marked for [case](la-feat/Case), but it might still retain [gender](la-feat/Gender) and/or [number](la-feat/Number) if it is a (proper) noun. The [infinitives](la-feat/VerbForm), as verbal nouns, are indeclinable.

Most nominal parts of speech are also represented by some indeclinable members to a greater or lesser extent. It is not uncommon for these latter, especially for nouns, to be foreign loanwords. Sometimes, such words appear both as indeclinable and as inflected forms (e.g. *Adam* can be either indeclinable, or associated to the first declension, taking genitive *Adae* etc.).

#### Examples

* ***Ierusalem*** 'Jerusalem' (Proper noun) 
* ***fas*** 'divine law' (Noun) 
* ***nequam*** 'worthless' (Adjective) 
* ***tot*** 'so many' (Determiner)
* ***quattuor*** 'four' (Numeral) 

There seem to be no indeclinable finite forms of verbs nor pronouns. 

<!-- Interlanguage links updated St lis 3 20:58:22 CET 2021 -->
