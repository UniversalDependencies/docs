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

A word belonging to a nominal part of speech whose members are usually expected to inflect, but which itself does not, receives the value `Ind`. The word retains [case](be-feat/Case), [gender](be-feat/Gender), and [number](be-feat/Number) features assigned by syntactic/semantic principles.  

Most nominal parts of speech are also represented by some indeclinable members to a greater or lesser extent. It is not uncommon for these latter, especially for nouns, to be foreign loanwords and proper nouns of foreign origin. Sometimes, such words appear both as indeclinable and as inflected forms (e.g. *Adam* can be either indeclinable, or associated to the first declension, taking genitive *Adae* etc.).  

Some Belarusian family names are indeclinable.  

#### Examples

* _журналісты **Радыё** Свабода_ 'journalists of Radio Liberty' (Noun) 
* _Андрэй ***Савіных***_ 'Andrey Savinykh' (Proper noun) 
* _касцюм ***беж***_ 'beige suit' (Adjective) 

There seem to be no indeclinable forms of pronouns. Neither [infinitives](u-feat/VerbForm) nor finite verbs attested in only one (impersonal) form, are labeled with this feature.
