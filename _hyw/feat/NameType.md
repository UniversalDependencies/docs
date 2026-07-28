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
  <td><a href="#Oth">Oth</a></td>
  <td><a href="#Pat">Pat</a></td>
  <td><a href="#Pro">Pro</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Sur">Sur</a></td>
</tr>
</table>

Classification of named entities (token-based, no nesting of entities etc.). The feature applies mainly to the [PROPN]() tag; in multi-word foreign names, [adjectives](ADJ) may also have this feature (they preserve the `ADJ` tag, because they would not otherwise occur in Armenian outside the named entity).

### <a name="Geo">`Geo`</a>: geographical name

Names of cities, countries, rivers, mountains, etc.

#### Examples

* _Պոլիս_/_Polis_ “Constantinople”, _Զուիցերիա_/_Zowicʼeria_ “Switzerland”, _ՀՀ_/_HH_ “RA”, _Եւրոպա_/_Ewropa_ “Europe”, _Գերմանիա_/_Germania_ “Germany”, _Վան_/_Van_ “Van”, _Սևանա_/_Sewana_ “of Sevan”

### <a name="Prs">`Prs`</a>: name of person

This value is used if it is not known whether it is a given or a family name, but it is known that it is a personal name. This value is also used for pseudonyms, nicknames, pen names, etc.

#### Examples

* _Մեծարենց_/_Meçarencʼ_ “Metsarents”, _Ալիշան_/_Ališan_ “Alishan”, _Լուսաւորիչ_/_Lowsaworič_ “the Illuminator”, _Չիֆթէ_/_Čiftʼē_ “Chifte”,  _Նարեկացի_/_Narekacʼi_ “of Narek”, _Կոմիտաս_/_Komitas_ “Komitas”

### <a name="Giv">`Giv`</a>: given name of person

Given name (not family name). This is usually the first name.

#### Examples

* _Արամ_/_Aram_ “Aram”, _Անահիտ_/_Anahit_ “Anahit”, _Հրանդ_/_Hrand_ “Hrand”

### <a name="Sur">`Sur`</a>: surname / family name of person

Family name (surname). This is usually the last name.

#### Examples

* _Խանճեան_/_Xanč̣ean_ “Khanjian”, _Տէր-Անդրէասեան_/_Tēr-Andrēasean_ “Ter-Andreassian”, _Յովնանեան_/_Yovnanean_ “Hovnanian”, _Աքչամ_/_Akʼčam_ “Akçam”

### <a name="Com">`Com`</a>: company, organization, institution

#### Examples

* _ԵՈՒՆԻՍԵՖ_/_EOWNISEF_ “UNICEF”, _ՄԱԿ_/_MAK_ “UN”, _ՀՅԴ_/_HYD_ “ARF”, _Թուիթըր_/_Tʼowitʼër_ “Twitter”

### <a name="Pro">`Pro`</a>: product

#### Examples

* _Աւետարան_/_Awetaran_ “Gospel”, _Ակօս_/_Akos_ “Agos”, _Թուիքս_/_Tʼowikʼs_ “Twix”, _Մերսեդես_/_Mersedes_ “Mercedes”

### <a name="Oth">`Oth`</a>: other

Names of stadiums, guerrilla bases, events, etc.

#### Examples

* _«Սավուա»_/_«Savowa»_ “Savoie” (hotel), _Եղեռն_/_Eġeṙn_ “Genocide”, _Զատիկ_/_Zatik_ “Easter”
<!-- Interlanguage links updated Út 30. června 2026, 10:59:01 CEST -->
