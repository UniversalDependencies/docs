---
layout: base
title:  'Layered universal features'
generated: 'false'
permalink: u/overview/feat-layers.html
udver: '2'
---

# Layered universal features

In some languages, some features are marked more than once on the same word.
We say that there are several _layers_ of the feature.
The exact meaning of individual layers is language-dependent.

For example, possessive adjectives, determiners and pronouns may have two
different values of [u-feat/Gender]() and two of [u-feat/Number](). One of the values is determined
by agreement with the modified (possessed) noun. This is parallel to other
(non-possessive)
adjectives and determiners that agree in gender and number with the nouns they
modify. The other value is determined lexically because it is a property of
the possessor.
The following table shows that
English distinguishes only the possessor's gender and number;
Hindi distinguishes gender in agreement and number both in agreement and of the possessor
(there is no neuter gender in Hindi);
German distinguishes both features in both dimensions
(more differences would be seen if we also showed German dative and accusative forms, not just nominatives).

<table>
  <tr>
    <td>Possessor / Agreement</td>
    <td>&nbsp;</td>
    <td>Sing Masc</td>
    <td>Sing Fem</td>
    <td>Sing Neut</td>
    <td>Plur Masc</td>
    <td>Plur Fem</td>
  </tr>
  <tr>
    <td>Sing Masc</td>
    <td>[en]<br/>[de]<br/>[hi]</td>
    <td><span style='color:red'>his</span> son<br/><span style='color:red'>sein</span> Sohn<br/><span style='color:red'>usakā</span> bēṭā</td>
    <td><span style='color:red'>his</span> daughter<br/><span style='color:red'>seine</span> Tochter<br/><span style='color:red'>usakī</span> bēṭī</td>
    <td><span style='color:red'>his</span> house<br/><span style='color:red'>sein</span> Haus<br/>&nbsp;</td>
    <td><span style='color:red'>his</span> sons<br/><span style='color:red'>seine</span> Söhne<br/><span style='color:red'>usakē</span> bēṭē</td>
    <td><span style='color:red'>his</span> daughters<br/><span style='color:red'>seine</span> Töchter<br/><span style='color:red'>usakī</span> bēṭiyām̐</td>
  </tr>
  <tr>
    <td>Sing Fem</td>
    <td>[en]<br/>[de]<br/>[hi]</td>
    <td><span style='color:red'>her</span> son<br/><span style='color:red'>ihr</span> Sohn<br/><span style='color:red'>usakā</span> bēṭā</td>
    <td><span style='color:red'>her</span> daughter<br/><span style='color:red'>ihre</span> Tochter<br/><span style='color:red'>usakī</span> bēṭī</td>
    <td><span style='color:red'>her</span> house<br/><span style='color:red'>ihr</span> Haus<br/>&nbsp;</td>
    <td><span style='color:red'>her</span> sons<br/><span style='color:red'>ihre</span> Söhne<br/><span style='color:red'>usakē</span> bēṭē</td>
    <td><span style='color:red'>her</span> daughters<br/><span style='color:red'>ihre</span> Töchter<br/><span style='color:red'>usakī</span> bēṭiyām̐</td>
  </tr>
  <tr>
    <td>Sing Neut</td>
    <td>[en]<br/>[de]<br/>&nbsp;</td>
    <td><span style='color:red'>its</span> son<br/><span style='color:red'>sein</span> Sohn<br/>&nbsp;</td>
    <td><span style='color:red'>its</span> daughter<br/><span style='color:red'>seine</span> Tochter<br/>&nbsp;</td>
    <td><span style='color:red'>its</span> house<br/><span style='color:red'>sein</span> Haus<br/>&nbsp;</td>
    <td><span style='color:red'>its</span> sons<br/><span style='color:red'>seine</span> Söhne<br/>&nbsp;</td>
    <td><span style='color:red'>its</span> daughters<br/><span style='color:red'>seine</span> Töchter<br/>&nbsp;</td>
  </tr>
  <tr>
    <td>Plur</td>
    <td>[en]<br/>[de]<br/>[hi]</td>
    <td><span style='color:red'>their</span> son<br/><span style='color:red'>ihr</span> Sohn<br/><span style='color:red'>unakā</span> bēṭā</td>
    <td><span style='color:red'>their</span> daughter<br/><span style='color:red'>ihre</span> Tochter<br/><span style='color:red'>unakī</span> bēṭī</td>
    <td><span style='color:red'>their</span> house<br/><span style='color:red'>ihr</span> Haus<br/>&nbsp;</td>
    <td><span style='color:red'>their</span> sons<br/><span style='color:red'>ihre</span> Söhne<br/><span style='color:red'>unakē</span> bēṭē</td>
    <td><span style='color:red'>their</span> daughters<br/><span style='color:red'>ihre</span> Töchter<br/><span style='color:red'>unakī</span> bēṭiyām̐</td>
  </tr>
</table>

If a feature is (can be) layered in a language, the name of the feature must
indicate the layer. An additional identifier in square brackets is used to
distinguish layers, e.g. `Gender[psor]` for the possessor's gender.
We recommend that the layer identifiers consist of lowercase English letters
`[a-z]` and/or digits `[0-9]`.
The layers, their meaning and their
identifiers must be defined in a language-specific extension to this
documentation. For each layered feature, one layer may be defined as default
and the corresponding features then appear without identifier,
e.g. `Gender=Masc|Gender[psor]=Fem`.

<strong>In the following, we list some examples of layered features attested in existing corpora.
These may be used as inspiration or they may be used _as-is_ in treebanks for which they are
found appropriate. Note that even if a treebank uses a layered feature from this section,
it should still be described in the language-specific documentation.</strong>

## Gender[psor]

Possessive
adjectives and pronouns may have two different <a href="u/feat/Gender.html">genders</a>: that of the
possessed object (gender agreement with modified noun) and that of
the possessor (lexical feature, inherent gender).

The `Gender[psor]` feature captures the possessor's gender.

In
the Czech examples below, the masculine Gender[psor] implies using one
of the suffixes <I>-</I><I>ův, -ova, -ovo,</I>
and the feminine Gender[psor] implies using one of <I>-</I><I>in,
-ina, -ino</I>.

### Masc: masculine possessor

Examples:
[cs]
<span style='color: red'><I>otcův syn</I></span> (father's son; `Gender=Masc|Gender[psor]=Masc`);
<span style='color: red'><I>otcova dcera</I></span> (father's daughter; `Gender=Fem|Gender[psor]=Masc`);
<span style='color: red'><I>otcovo dítě</I></span> (father's child; `Gender=Neut|Gender[psor]=Masc`).

### Fem: feminine possessor

Examples:
[cs]
<span style='color: red'><I>matčin syn</I></span> (mother's son; `Gender=Masc|Gender[psor]=Fem`);
<span style='color: red'><I>matčina dcera</I></span> (mother's daughter; `Gender=Fem|Gender[psor]=Fem`);
<span style='color: red'><I>matčino dítě</I></span> (mother's child; `Gender=Neut|Gender[psor]=Fem`).

In other languages (Hebrew, Arabic), the possessor's gender and number are agreement rather than lexical features:

Examples: [he] <i><span style='color:red'>HKPH</span> FL HARC</i> (perimeter of country).
Features of the two nouns are as follows:
perimeter.`Gender=Masc|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing`
country.`Definite=Def|Gender=Fem|Number=Sing`.

The [psor] features of _perimeter_ are dictated by agreement with the possessor, _country._

(This is a partial description of this example. _HKPH_ has many morphological analyses, some of them are masculine single-layered, some of them are feminine single-layered. You can only find the right morphosyntactic analysis if you detect the two layers of agreement features, and can identify this specific agreement pattern.)

## Number[psor]

Possessives
may have two different <a href="u/feat/Number.html">numbers</a>: that of the possessed object (number
agreement with modified noun) and that of the possessor. The
`Number[psor]` feature captures the possessor's number.

### Sing: singular possessor

Examples:
[en]
<i><span style='color: red'>my, his, her, its</span>;</i>
[cs]
<i><span style='color: red'>můj</span> pes</i>
(my dog; `Number=Sing|Number[psor]=Sing`);
<i><span style='color: red'>mí</span> psi</i>
(my dogs; `Number=Plur|Number[psor]=Sing`).

### Plur: plural possessor

Examples:
[en]
<i><span style='color: red'>our, their</span>;</i>
[cs]
<i><span style='color: red'>náš</span> pes</i>
(our dog; `Number=Sing|Number[psor]=Plur`);
<i><span style='color: red'>naši</span> psi</i>
(our dogs; `Number=Plur|Number[psor]=Plur`).

## Person[psor]

The possessor's person is marked e.g. on Hungarian nouns. These noun
forms would be translated to English as possessive pronoun + noun.

Note that it is reasonable to make this a layered feature even though
the default <a href="u/feat/Person.html">Person</a> is normally not
marked on nouns. In relation to verbs (which may have to mark person
agreement with nouns), a noun is almost always in the third person.
So even if this default person is not explicitly marked morphologically,
and probably the default `Person` does not appear among features of
the noun, we should not use the default layer of persons to mark the
possessor. If we abused the default layer, the annotation would no longer
be parallel to personal pronouns that could be substituted for the noun.

On the other hand, we probably do not want a separate `[psor]` layer
for the person of possessive determiners / pronouns.
They modify a noun, not a verb. Arguably they have only one `Person`
feature and it is lexical (while for the Hungarian nouns,
`Person[psor]` is inflectional).
They usually modify nouns, not verbs, and agreement with verbs does
not play any role.
Moreover, in some languages possessive pronouns are actually identical
to personal pronouns in the genitive <a href="u/feat/Case.html">case</a>
and it is logical that they have the same `Person` as in the nominative.

### 1: first person possessor

Examples:
[hu]
<I>kutya</I> = dog;
<span style='color: red'><I>kutyám</I></span> = my dog;
<span style='color: red'><I>kutyánk</I></span> = our dog.

### 2: second person possessor

Examples:
[hu]
<I>kutya</I> = dog;
<span style='color: red'><I>kutyád</I></span> = your.Sing dog;
<span style='color: red'><I>kutyátok</I></span> = your.Plur dog.

### 3: third person possessor

Examples:
[hu]
<I>kutya</I> = dog;
<span style='color: red'><I>kutyája</I></span> = his/her/its dog;
<span style='color: red'><I>kutyájuk</I></span> = their dog.

<i>János <span style='color:red'>csontja</span></i><br/>
lit. John <span style='color:red'>his-bone</span><br/>
John's bone

<i>János <span style='color:red'>csontjai</span></i><br/>
lit. John <span style='color:red'>his-bones</span><br/>
John's bones

<i>Péternek sok <span style='color:red'>pénze</span> van.</i><br/>
lit. to-Peter much <span style='color:red'>his-money</span> there-is<br/>
Peter has a lot of money.

## Number[psee]

This feature seems to be very specific to Hungarian.
It denotes the possessee's (possessed, owned noun phrase's) number.
Hungarian has three types of number in the nominal inflection:

* The number of the noun (inflectional, non-agreement).
* The number of owners that own the noun (inflectional, agreement with possessor that may or may not be pronounced).
* The number of the context-given referent, which is some possession of the noun, i.e. belongs to the noun (anaphoric possessive; in a sense, this is an agreement feature, but the head noun is not pronounced in the sentence).

Examples from the Multext-East Hungarian lexicon:

* <I>könnyedén</I> (SSS)
  * <I>könny</I> = a tear (singular)
  * <I>könnyed</I> = your tear (singular owner)
  * <I>könnyedé</I> = (possession) of your tear (singular possession)
  * <I>könnyedén</I> = (on the possession) of your tear (superessive case)
* <I>ellenfeleié</I> (PSS)
  * <I>ellenfél</I> = an opponent (singular)
  * <I>ellenfele</I> = his/her/its opponent (singular owner)
  * <I>ellenfelei</I> = his/her/its opponents (core plural, singular owner)
  * <I>ellenfeleié</I> = (possession) of his/her/its opponents (singular possession)
* <I>életeké</I> (SPS)
  * <I>él</I> = point (singular)
  * <I>élek</I> = points (plural)
  * <I>élén</I> = his/her/its point (singular owner)
  * <I>élünk</I> = our point (plural owner)
  * <I>életeké</I> = (possession) of our point (singular possession)
* <I>tárgyalópartnereinkét</I> (PPS)
  * <I>tárgyalópartner</I> = negotiator (singular)
  * <I>tárgyalópartnerei</I> = his/her/its negotiators (plural, singular owner)
  * <I>tárgyalópartnereinkét</I> = (possession) of our negotiators (plural, plural owner, singular possession, accusative case)

Words marked for plural possessions are very rare, though. Note
that in the following example from Multext-East, Columbus is marked
for plural possession, but not for his own owner. 

* <I>Kolumbuszéinál</I>
  * <I>Kolumbusz</I> = Columbus (singular)
  * <I>Kolumbuszéi</I> = (possessions) of Columbus (plural possession)
  * <I>Kolumbuszéinál</I> = (at the possessions) of Columbus (adessive case)

See also <a href="http://ling.auf.net/lingbuzz/002042/current.pdf">Éva Dékány (2014): The syntax of anaphoric possessives in Hungarian</a>:
In anaphoric possessives the possessed noun, the head of the whole nominal phrase,
is not pronounced, and its reference has to be recovered from the context.
The possessor in Hungarian anaphoric possessives has to bear the _-é_ suffix.

Since `Number[psee]=Plur` is extremely rare, this feature is not so important
for distinguishing singular and plural possessions. However, the mere presence
of `Number[psee]=Sing` informs that there is the _-é_ suffix and thus that
there is an unpronounced possession.

## Layered verb agreement in Basque

Verbs in many Indo-European languages must agree in person and number
with their subject. This is what typically [u-feat/Person]() and
[u-feat/Number]() of verbs denote.

Some verbs in Basque must agree in person and number with up to three arguments:
the absolutive argument (subject of intransitive verbs and object of transitive verbs),
the ergative argument (subject of transitive verbs)
and the dative argument (indirect object).

We could make the absolutive agreement the default, thus using `Person` and `Number`
without layer identifiers.
If there is also one of the other two arguments, we will have
`Person[erg]`, `Number[erg]` and `Person[dat]`, `Number[dat]`, respectively.

Example: <i><span style='color:red'>nahi dizkiegu</span>,</i> lemma = <i>nahi_izan</i>,
feats = `Number=Plur|Number[dat]=Plur|Number[erg]=Plur|Person=3|Person[dat]=3|Person[erg]=1`
(we want them to them).
