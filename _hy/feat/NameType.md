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

* _Երևան_/_Erewan_ “Yerevan”, _ՀՀ_/_HH_ “RA”, _Եվրոպա_/_Evropa_ “Europe”, _Գերմանիա_/_Germania_ “Germany”, _Վանա_/_Vana_ “of Van”, _Սևանա_/_Sewana_ “of Sevan”

### <a name="Prs">`Prs`</a>: name of person

This value is used if it is not known whether it is a given or a family name, but it is known that it is a personal name. This value is also used for pseudonyms, nicknames, pen names, etc.

#### Examples

* _Նար-Դոս_/_Nar-Dos_ “Nar-Dos”, _Գամառ-Քատիպա_/_Gamaṙ-Kʼatipa_ “Gamar-Katipa”, _Քաչալ_/_Kʼačal_ “Kachal (skinhead)”, _Կոմիտաս_/_Komitas_ “Komitas”

### <a name="Giv">`Giv`</a>: given name of person

Given name (not family name). This is usually the first name.

#### Examples

* _Արամ_/_Aram_ “Aram”, _Անահիտ_/_Anahit_ “Anahit”, _Հովհաննես_/_Hovhannes_ “Hovhannes”

### <a name="Pat">`Pat`</a>: patronymic in a name of a person

Patronymic (not given name and not family name). This value is also used for foreign (mostly Slavic or Slavic-style) patronymics.

#### Examples

* _Սերոբի_/_Serobi_ “Serobi”, _Արամիչ_/_Aramič_ “Aramich”, _Անդրեևնա_/_Andreewna_ “Andreyevna”, _Սերգեևիչ_/_Sergeewič_ “Sergeyevich”

### <a name="Sur">`Sur`</a>: surname / family name of person

Family name (surname). This is usually the last name.

#### Examples

* _Սարոյան_/_Saroyan_ “Saroyan”, _Տեր-Պետրոսյան_/_Ter-Petrosyan_ “Ter-Petrosyan”, _Գրիգորյան_/_Grigoryan_ “Grigoryan”

### <a name="Com">`Com`</a>: company, organization, institution

#### Examples

* _Սիմենս_/_Simens_ “Siemens”, _ՄԱԿ_/_MAK_ “UN”, _ԳԱԱ_/_GAA_ “NAS”

### <a name="Pro">`Pro`</a>: product

#### Examples

* _Երազ_/_Eraz_ “Yeraz”, _ԿամԱԶ_/_KamAZ_ “Kamaz”, _Չայկա_/_Čayka_ “Chaika”, _Մերսեդես_/_Mersedes_ “Mercedes”

### <a name="Oth">`Oth`</a>: other

Names of stadiums, guerrilla bases, events, etc.

#### Examples

* _«Հրազդան»_/_«Hrazdan»_ “Hrazdan”, _«Դինամո»_/_«Dinamo»_ “Dinamo”, _«Զվարթնոց»_/_«Zvartʼnocʼ»_ “Zvartnots”, _Զատիկ_/_Zatik_ “Easter”
<!-- Interlanguage links updated Út 30. června 2026, 10:59:01 CEST -->
