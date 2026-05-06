---
layout: feature
title: 'Case'
shortdef: 'case'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Gen">Gen</a></td>
  <td><a href="#Nom">Nom</a></td>
  <td><a href="#Npiv">Npiv</a></td>
  <td><a href="#Piv">Piv</a></td>
</tr>
</table>

In Gorontalo, [Case]() is a lexical feature of a token, and is used for inherently case-marked
pronouns ([PRON]()) and case-marking adpositions ([ADP]()), which are attached to noun phrases to 
mark case.

Currently, in UD Gorontalo the `Case` feature is only used for alignment-marking case, such as
marking pivot and non-pivot.

### <a name="Piv">`Piv`</a>: pivot

In Gorontalo the pivot argument is the one with which the verb's morphology must agree, and is the 
subject of the clause regardless of voice. A pivot marker is typically used to mark the pivot where
the argument is a proper noun, but is usually otherwise left implicit since word order places the 
pivot before the verb.
Pivot markers are of the form *te* (masculine) or *ti* (feminine).

#### Examples

* [gor] _**Ti** Dewi lo-tubu uponula_ "Dewi cooked the fish." (actor voice)
* [gor] _**Te** Hasan pilohama li Dewi batade_ "Dewi took the goat from Hasan" (instrument voice)
* [gor] _**Te** Pulu londo Limutu_ "Pulu is from Limboto."

### <a name="Npiv">`Npiv`</a>: non-pivot

The non-pivot argument(s) of a clause are those which are core participants in the clause argument
structure but which are not in the pivot/subject role. As with pivot markers, non-pivot markers are
usually used when the argument is a proper noun, while arguments are usually otherwise left unmarked.

#### Examples
* [gor] _Uponula tilubu **li** Dewi **lo** bulonggo_ "**(NPIV)** Dewi cooked fish **in** the pan." or "The pan was cooked fish **in** **by** Dewi"

### <a name="Gen">`Gen`</a>: genitive

`Gen` is used for non-pivot markers that are used to mark modifiers of other nominals.

#### Examples
* [gor] _Te Pulu wutata **li** Ati_ "Pulu is the sibling **of** Ati."

### <a name="Nom">`Nom`</a>: nominative

`Nom` is used for pivot markers in most symmetrical voice languages in UD. We prefer `Piv` as it is
more directly descriptive of symmetrical voice, but we document `Nom` here so that `Piv` may be 
losslessly converted to it for compatibility.

#### Examples

* [gor] _**Ti** Dewi lo-tubu uponula_ "Dewi cooked the fish." (actor voice)
* [gor] _**Te** Hasan pilohama li Dewi batade_ "Dewi took the goat from Hasan" (instrument voice)
* [gor] _**Te** Pulu londo Limutu_ "Pulu is from Limboto."
<!-- Interlanguage links updated St 6. května 2026, 20:42:31 CEST -->
