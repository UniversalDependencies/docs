---
layout: feature
title: 'Variant'
shortdef: 'non-standard morphological form'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Long">Long</a></td>
  <td><a href="#Short">Short</a></td>
</tr>
</table>

### <a name="Long">`Long`</a>: long form

`Variant=Long` distinguishes long forms of infinitives and negative imperatives in nonstandard Romanian.

#### Examples

* _nu vă <b>teamereți</b> de ceia ce omoară trupul_ “do not fear those that kill the body” (old long form)
* _nu vă temeți de cei ce omoară trupul_ “do not fear those that kill the body” (newer form)

### <a name="Short">`Short`</a>: short form

Clitics are often written in a contracted form, with some characters omitted, and attached via
a hyphen to a neighboring word. Such form is annotated as `Variant=Short`. Note that this is not
the same as [Strength]()`=Weak`, although the two features interact.

#### Examples

* _sine_ “oneself” `Case=Acc|Strength=Strong` (strong form of the reflexive pronoun)
* _se_ “oneself” `Case=Acc|Strength=Weak` (weak but full form of the reflexive pronoun)
* _<b>s-, -se, se-</b>_ “oneself” `Case=Acc|Strength=Weak|Variant=Short`

<!-- Interlanguage links updated Čt lis 12 09:43:07 CET 2020 -->
