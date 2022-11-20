---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
   <td><a href="#Art">Art</a></td>
  <td><a href="#Dem">Dem</a></td>
  <td><a href="#Emp">Emp</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Int">Int</a></td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Rel">Rel</a></td>
  <td><a href="#Tot">Tot</a></td>
</tr>
</table>

This feature  applies to Modern Greek [pronouns](el-pos/PRON),
[determiners](el-pos/DET) and  [adverbs](el-pos/ADV).



*	possessive pronouns: weak types, e.g., *μου* in *το σπίτι μου* / *to spiti mou* "my house"
* reflexive pronouns: *εαυτός* / *eaftos* "self"
*	relative pronouns <code>PronType=Rel</code>: *οποίος* / *opios* "who"


### <a name="Art">`Art`</a>: article

Article is a special case of <b>determiner</b> that bears the feature of
[definiteness](Definite). Modern Greek has a definite and an indefinite article. 

#### Examples

* definite article: _ο,του, τον, η, της, την, το, οι, των, τους, τα_
* indefinitie article _ένας, ενός, ένα, μία, μίας_ 

### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner or adverb

They are understood as determiners when they are followed by a noun. 

#### Examples
  
<b>Pronouns, Determiners</b>
-	*αυτός*  "this"
- *εκείνος*  "that" 
- *(ε)τούτος* "this/that"
- *τέτοιος*  "such"
- *τόσος*  "this/that many/much, so/as"
- *ίδιος* "the same"

<b>Demonstrative adverbs</b>
  - *εδώ* "here"
  - *εκεί* "there"
  - *τώρα* "now"
  - *τότε* "then"
  
### <a name="Emp">`Emp`</a>: emphatic determiner

Emphatic pro-adjectives (determiners) emphasize the nominal they depend on.
There are similarities with reflexive and demonstrative pronouns / determiners.

#### Examples
-	 *ίδιος* "himself" e.g.,  *ήρθε ο ίδιος και μου είπε*  "he himself came  and told me..."
  
### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner or adverb

They are understood as determiners when they are followed by a noun. 

#### Examples

<b>Pronouns, Determiners</b>

- *άλλος* "other"
- *κάποιος* "somebody"
- *κάτι*  "some"

<b>Indefinite adverbs</b>
- *κάπου* "somewhere"
- *κάποτε* "sometime"
- *οπουδήποτε* "anywhere"
- *οποτεδήποτε* "anytime"

### <a name="Int">`Int`</a>: interrogative pronoun, determiner or adverb

They introduce direct or indirect questions.

#### Examples: 

<b>Pronouns, Determiners</b>
- *ποιος*  "who"
- *πόσος* "how many/much"
- *τι* "what"

<b>Interogative adverbs</b>
- *πού* "where"
- *πότε* "when"
- *πώς* "how"
- *γιατί*  "why"


### <a name="Neg">`Neg`</a>: negative pronoun, determiner or adverb

Negative pronominal words are distinguished from negating [particles](u-pos/PART)
and from words that inflect for polarity (verbs, adjectives etc.) Those words
do not use `PronType=Neg`, they use `Polarity=Neg` instead. See the
[Polarity]() feature for further details.

#### Examples: 

<b>Pronouns, Determiners</b>
- _κανείς, κανένας, καμιά_ "nobody"
- _τίποτα, κανένα_ "nothing"
- κανενός, καμιανής "no one's (negative possessive)
  
<b>Negative adverbs</b>
- *πουθενά* / *pouthena* ‘nowhere', *ποτέ* / *pote* ‘never'

### <a name="Prs">`Prs`</a>: personal pronoun or determiner

Μodern Greek has two types of personal pronouns: strong and weak  (clitics), e.g., 
the weak types *του το* in *του το έδωσα*  "I gave _it_ to _him_"

#### Examples

* the weak types: _μου, σου, με, σε, του, της, τον, την, το, μας, σας, τους, τις, τα_
* the strong types: _εγώ, εσύ, εμένα, εσένα, εμείς, εσείς, εμάς, εσάς_



### <a name="Rel">`Rel`</a>: relative pronoun, determiner or adverb

Pronouns never occur with the noun for which they stand and they cannot be replaced with a synonymous nominal phrase; these facts offer a criterion for setting determiners apart from pronouns. As in many languages, in Modern Greek relative pronouns heavily overlap with interrogatives.


#### Examples: 
<b>Pronouns, Determiners</b>
- _ο οποίος, η οποία, το οποίο_ “who, that"
- _που_ is assigned the tag [PRON]() if it refers to a noun, e.g. _Έχουμε πολλές πληροφορίες, που.PRON δεν οδηγούν όμως πουθενά_ "we have much information _that_, however, leads to nowhere". 

<b>Relative adverbs</b>
- _όπως_ "as, in the way that"

### <a name="Tot">`Tot`</a>: total (collective) pronoun, determiner or adverb

#### Examples
<b>Pronouns, Determiners</b>
- _καθείς, καθένας, καθεμία, καθένα_ "every, everybody, everyone, each"
- _όλοι, όλες, όλα_ "all"

<b>Collective adverbs</b>
- _παντού_ "everywhere"
- _πάντοτε_ "always"



<!-- Interlanguage links updated Po lis 14 15:34:56 CET 2022 -->
