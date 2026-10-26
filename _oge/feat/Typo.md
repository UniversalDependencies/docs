---
layout: feature
title: 'Typo'
shortdef: 'typo'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Typo">Yes</a></td>
</tr>
</table>

Boolean feature indicating typographic errors. The `Typo` (Typo=Yes) is used for erroneous or orthographically unexpected Georgian word forms, including misspellings, omitted or extra letters and accidental spaces within a word. If a word is incorrectly split by a space, its parts are connected with `goeswith` [goeswith](_oge/dep/goeswith), and Typo=Yes is assigned to the head of the goeswith relation.

The correct form may be specified in the MISC column with CorrectForm.

Dialectal, colloquial, archaic, or intentionally expressive forms are not normally marked with Typo=Yes unless they represent an actual orthographic error.

### <a name="Yes">`Yes`</a>: a word contains a typographic error

#### Examples
34	მად	მადლი	NOUN	Noun	Case=Dat|Number=Sing|Typo=Yes	37	obj	_	CorrectForm=მადლსა|Translit=madl
35	ლსა	_	X	_	_	34	goeswith	_	Translit=lsa

<!-- Interlanguage links updated So 10. května 2025, 18:14:37 CEST -->
