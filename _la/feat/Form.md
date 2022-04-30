---
layout: feature
title: 'Form'
shortdef: 'semantically significant form variation of a word'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Emp">Emp</a></td>
</tr>
</table>

This is a morphological feature that marks a usually non-paradigmatic, and possibly not even standardised, variation in the form of a word which also determines a change in its meaning or use, or which is itself determined by a particular syntactic context. 

### <a name="Emp">`Emp`</a>: emphatic form of a word

This value is marked for words which appear in an expanded, emphatic form with respect to some "more basic" form or that otherwise incorporate common emphatic elements, and that can be no longer analyzed as [compounds](la-feat/Compound) if they ever were one. 

In Latin, this phenomenon is particularly common, and limited, to functional words with a [discoursive](la-dep/discourse) role (usually labelled as [particles](la-pos/PART)) and words in relational and deictic classes like [pronouns](la-pos/PRON) and [determiners](la-pos/DET). Strategies to mark emphasis are often specific to given word subclasses, like personal pronouns, and can often be traced back to demonstrative/pronominal/conjunctional or interjective elements.

Emphasis differs from [degree](la-feat/Degree) in that it does not scale a quality or property, but it rather singles out an element in the clause and highlights or focuses it (so this feature can appear in conjunction with the relation [`advmod:emph`](la-dep/advmod-emph)) or otherwise strengthens it by extending its scope.


#### Examples

* ***enim*** is emphatic with respect to *nam*
* ***equidem*** is emphatic with respect to *quidem*
* ***ecce*** is a "presentative particle" in an emphatic form, also with a demonstrative *-ce* element 
    * in all these words, an *e-* element appears, which might be the same in all cases  
* ***namque*** is another emphatic form of *nam* showing the common *-que* suffix for generalisation (cf. *quis* 'who' vs. *quisque* 'whoever')
* ***meopte*** shows an emphatic *-pte* suffix, which is added only to possessives
* ***semet*** shows an emphatic *-met* suffix, added nearly exclusively to personal pronouns (*egomet*, *tibimet*...), often treated as a [clitic](la-feat/Clitic)
* ***sese***, emphasis by reduplication of the reflexive third person personal pronoun *se* (abl./acc. case)
* ***mehercle*** can possibly be seen as an emphatic form of the vocative of *Hercules* (*me-* might correspond to the first-person personal pronoun)
* ***īdem/eadem/ĭdem*** 'the same' is a strengthened form of the personal pronoun *is/ea/id* 'he/she/it' by means of the suffix *-dem*, of demonstrative origin
* ***quamquam*** or ***quanquam*** is an example of emphasis by reduplication


<!-- Interlanguage links updated St lis 3 20:58:21 CET 2021 -->
