---
layout: base
title:  'Layered universal features'
generated: 'false'
---

# Layered universal features

In some languages, some features are marked more than once on the same word.
We say that there are several _layers_ of the feature.
The exact meaning of individual layers is language-dependent.

For example, possessive adjectives, determiners and pronouns may have two
different values of [ud-feat/Gender]() and two of [ud-feat/Number](). One of the values is determined
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
adjectives and pronouns may have two different genders: that of the
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

## Number[psor]

Possessives
may have two different numbers: that of the possessed object (number
agreement with modified noun) and that of the possessor. The
`Number[psor]` feature captures the possessor's number.

### Sing: singular possessor

Examples:
[en]
<span style='color: red'><I>my,
his</I></span><span style='color: red'><I>,
her, its</I></span>;
[cs]
<span style='color: red'><I>můj</I></span><I>
pes</I>
(my
dog; PossNumber=Sing|Number=Sing); <span style='color: red'><I>mí</I></span><I>
psi</I>
(my
dogs; PossNumber=Sing|Number=Plur).

### Plur: plural possessor

Examples:
[en]
<span style='color: red'><I>our,
t</I></span><span style='color: red'><I>heir</I></span>;
[cs]
<span style='color: red'><I>náš</I></span><I>
pes</I>
(our
dog; PossNumber=Plur|Number=Sing); <span style='color: red'><I>naši</I></span><I>
psi</I>
(our
dogs; PossNumber=Plur|Number=Plur).

## Person[psor]

`Person[psor]`
is possessor's person, marked e.g. on Hungarian nouns. These noun
forms would be translated to English as possessive pronoun + noun.

Note
that there is currently a sort of inconsitency in Interset: since
this feature was introduced, it would be logical to use it also for
possessive pronouns in other languages. Yet the possessor's person of
these pronouns is traditionally captured in the &ldquo;Person&rdquo;
feature. Also note that using PossPerson for possessive pronouns
might introduce inconsistency at the other end because in some
languages, possessive pronouns are actually identical to personal
pronouns in the genitive case.

### 1: first person possessor

Examples:
[hu]
<I>kutya</I>
= dog;
<span style='color: red'><I>kutyám</I></span>
=
my dog;
<span style='color: red'><I>kutyá</I></span><span style='color: red'><I>nk</I></span>
=
our dog.

### 2: second person possessor

Examples:
[hu]
<I>kutya</I>
= dog;
<span style='color: red'><I>kutyá</I></span><span style='color: red'><I>d</I></span>
=
your.Sing dog;
<span style='color: red'><I>kutyá</I></span><span style='color: red'><I>tok</I></span>
=
your.Plur dog.

### 3: third person possessor

Examples:
[hu]
<I>kutya</I>
= dog;
<span style='color: red'><I>kutyá</I></span><span style='color: red'><I>ja</I></span>
=
his/her/its dog;
<span style='color: red'><I>kutyá</I></span><span style='color: red'><I>juk</I></span>
=
their dog.

## Number[psee]

`Number[psee]`
is the possessee's (possessed, owned noun phrase's) number. In
Hungarian, possession can be marked on the possessor or on the
possessed. It is possible, though rare, that a noun has three
distinct number features: its own grammatical number, number of its
possessor and number of its possession. Examples from the
Multext-East Hungarian lexicon:

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

### Sing: singular possession

### Plur: plural possession
