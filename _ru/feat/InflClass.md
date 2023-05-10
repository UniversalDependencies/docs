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

A word belonging to a nominal part of speech whose members are usually expected to inflect, but which itself does not, receives the value `Ind`. The word retains [case](ru-feat/Case), [gender](ru-feat/Gender), and [number](ru-feat/Number) features assigned by syntactic/semantic principles.  

Most nominal parts of speech are represented by some indeclinable members to a greater or lesser extent. It is not uncommon for these latter, especially for nouns, to be foreign loanwords and proper nouns of foreign origin. Sometimes, both as indeclinable and as inflected forms represent the same grammatical form of such words.  

#### Examples

* _журналисты **Радио** Свобода_ 'journalists of Radio Liberty' (Noun) 
* _Андрей ***Савиных***_ 'Andrey Savinykh' (Proper noun) 
* _костюм цвета ***беж***_ 'beige color suit' (Adjective) 

There seem to be no indeclinable forms of pronouns.  
Neither [infinitives](ru-feat/VerbForm) nor finite verbs attested in only one (impersonal) form, are labeled with this feature.
<!-- Interlanguage links updated Út 9. května 2023, 20:03:39 CEST -->
