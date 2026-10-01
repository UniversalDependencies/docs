---
layout: feature
title: 'Style'
shortdef: 'style'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Expr">Expr</a></td>
  <td><a href="#Vrnc">Vrnc</a></td>
</tr>
</table>

`Style` marks expressive spellings and vernacular forms.

### <a name="Expr">`Expr`</a>: expressive

`Style=Expr` marks unconventional spellings used to represent pronunciation for expressive effect. These include reductions associated with rapid, casual or slurred speech, such as the indefinite articles _’n_ (for _un_) and _’na_ (for _unna_) and the preposition _p’_ (for _pe_). The corresponding unmarked form is recorded in `CorrectForm` in the `MISC` column. These spellings are not marked `Typo=Yes`.

Ordinary elisions used across written registers do not receive `Style=Expr`. These include _d’_ (for _de_ or _da_), _ch’_ (for _che_), _quand’_ (for _quande_) and _dond’_ (for _donde_).

#### Examples

* _arriva <b>’n</b> mæ amigo_ “a friend of mine is coming” (`CorrectForm=un`)
* _te diggo <b>’na</b> cösa_ “let me tell you one thing” (`CorrectForm=unna`)

### <a name="Vrnc">`Vrnc`</a>: vernacular

`Style=Vrnc` marks local or vernacular forms that differ from the reference koinè based on urban Genoese. The corresponding reference form is recorded in the project-specific `CommonForm` attribute in the `MISC` column, rather than in `CorrectForm`. Note that vernacular variation alone does not trigger `Typo=Yes`.

#### Examples

* _eiva_ “had” (`Style=Vrnc`, `CommonForm=aiva`)
* _lasciao_ “left” (`Style=Vrnc`, `CommonForm=lasciou`)
