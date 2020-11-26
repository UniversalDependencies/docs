---
layout: feature
title: 'NameType'
shortdef: 'type of named entity'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Com">Com</a></td>
  <td><a href="#Geo">Geo</a></td>
  <td><a href="#Giv">Giv</a></td>
  <td><a href="#Nat">Nat</a></td>
  <td><a href="#Oth">Oth</a></td>
  <td><a href="#Pro">Pro</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Sur">Sur</a></td>
</tr>
</table>

Classification of named entities (token-based, no nesting of entities etc.)
The feature applies mainly to the [cs-pos/PROPN]() tag;
in multi-word foreign names, [adjectives](cs-pos/ADJ) may also have this feature
(they preserve the `ADJ` tag but at the same time they would not exist in Czech
otherwise than in the named entity).

## Conversion from the Prague Dependency Treebank

Lemmas in PDT contain features
that also encode types of named entities. When converting the PDT annotation
to UD, these lemma features are removed and the feature
`NameType` is added to the universal features to preserve the type.

The following table lists the name types together with the most frequent examples.
See <a href="http://ufal.mff.cuni.cz/techrep/tr27.pdf#page=8">http://ufal.mff.cuni.cz/techrep/tr27.pdf</a>,
page 8, section 2.1 (Lemma structure) for more details.

<table>
<tr><td><tt>_;Y</tt></td><td>given name</td><td><em>Jan, Jiří, Václav, Petr, Josef</em></td><td>“Jan, Jiří, Václav, Petr, Josef”</td></tr>
<tr><td><tt>_;S</tt></td><td>surname</td><td><em>Klaus, Havel, Němec, Jelcin, Svoboda</em></td><td>“Klaus, Havel, Němec, Yeltsin, Svoboda”</td></tr>
<tr><td><tt>_;E</tt></td><td>member of a particular nation, inhabitant of a particular territory</td><td><em>Němec, Čech, Srb, Američan, Slovák</em></td><td>“German, Czech, Serbian, American, Slovak”</td></tr>
<tr><td><tt>_;G</tt></td><td>geographical name</td><td><em>Praha, ČR, Evropa, Německo, Brno</em></td><td>“Prague, CR, Europe, Germany, Brno”</td></tr>
<tr><td><tt>_;K</tt></td><td>company, organization, institution</td><td><em>ODS, OSN, Sparta, ODA, Slavia</em></td><td>“ODS, UN, Sparta, ODA, Slavia”</td></tr>
<tr><td><tt>_;R</tt></td><td>product</td><td><em>LN, Mercedes, Tatra, PC, MF</em></td><td>“LN, Mercedes, Tatra, PC, MF”</td></tr>
<tr><td><tt>_;m</tt></td><td>other proper name: names of mines, stadiums, guerilla bases etc.</td><td><em>US, PVP, Prix, Rapaport, Tour</em></td><td>“US, PVP, Prix, Rapaport, Tour”</td></tr>
</table>

### <a name="Geo">`Geo`</a>: geographical name

Names of cities, countries, rivers, mountains etc.

#### Examples

* _<b>Praha</b>&nbsp;_ “Prague”, _<b>Kostelec</b> nad Černými lesy, <b>Německo</b>&nbsp;_ “Germany”

### <a name="Giv">`Giv`</a>: given name of person

Given name (not family name). This is usually the first name in European and American names. In Chinese names, the last two syllables (of three) are usually the given name.

#### Examples

* _<b>Jan</b>, <b>Jiří</b>, <b>Václav</b>_

### <a name="Sur">`Sur`</a>: surname / family name of person

Family name (surname). This is usually the last name in European and American names. In Chinese names, the first syllable (of three) is usually the surname.

#### Examples

* _<b>Klaus</b>, <b>Havel</b>, <b>Němec</b>_

### <a name="Nat">`Nat`</a>: nationality

Name denoting a member of a particular nation, or inhabitant of a particular territory.
This does not include derived adjectives,
nor nouns denoting languages (both groups are written in lowercase).
Thus _<b>Čech</b>&nbsp;_ “Czech [man]” belongs here
but _český&nbsp;_ “Czech” and _čeština&nbsp;_ “Czech [language]” do not.

#### Examples

* _<b>Čech</b>&nbsp;_ “Czech”, _<b>Němec</b>&nbsp;_ “German”, _<b>Pražan</b>&nbsp;_ “Praguer”

### <a name="Com">`Com`</a>: company, organization

#### Examples

* _<b>Škoda</b>, <b>ODS</b>_

### <a name="Pro">`Pro`</a>: product

#### Examples

* _Opel <b>Astra</b>_

### <a name="Oth">`Oth`</a>: other

Names of stadiums, guerilla bases, events etc.

#### Examples

* _rádio <b>Classic</b> '93_ “radio Classic '93”

<!-- Interlanguage links updated Čt lis 12 09:43:03 CET 2020 -->
