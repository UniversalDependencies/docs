
---
layout: feature
title: 'InflClass'
shortdef: 'inflectional class'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Ind">Ind</a></td>
</tr>
</table>

The values of `InflClass` reflect the original endings of the stems and refer to the inflectional system of the language. 

The class `Ind` for indeclinable words is universal and is only applied to members of part-of-speech classes which protoypically inflect, but not to protoypically invariable elements (such as conjunctions). 

### <a name="Ind">`Ind`</a>: indeclinable

A word belonging to a nominal part of speech whose members are usually expected to inflect, but which itself does not, receives the value `Ind`. The word retains [case](Case), [gender](Gender), and [number](Number) features assigned by syntactic/semantic principles.  

In Ukrainian, third-person singular possessive pronouns are indeclinable. An indeclinable version of the third-person plural possessive pronoun _їх_ 'their' is also often found in texts ([bad style](BadStyle)). Ukrainian female surnames ending in _-о_ or a consonant are indeclinable. Words of foreign origin are often indeclinable or in fact have both declined and indeclinable variants (like _авто, бюро_ 'auto, bureau' - normatively indeclinable, but in fact variable).
#### Examples

* _**його**_, _**її**_ 'his, her' (Third person singular possessive pronouns)
* _Ірина **Геращенко**_ 'Iryna Heraščenko', _Віра **Франчук**_ 'Vira Frančuk',  (Female surnames)
* _журналісти **Радіо** Свобода_ 'journalists of Radio Liberty' (Foreign noun) 
* _костюм кольору ***беж***_ 'beige color suit' (Foreign adjective)


Neither [infinitives](VerbForm) nor finite verbs attested in only one (impersonal) form, are labeled with this feature.
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:01 CEST -->
