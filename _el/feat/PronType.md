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
[determiners](el-pos/DET) and pronominal [adverbs](el-pos/ADV).



*	possessive pronouns: weak types, e.g., *μου* in *το σπίτι μου* / *to spiti mou* "my house"
* reflexive pronouns: *εαυτός* / *eaftos* "self"
*	relative pronouns <code>PronType=Rel</code>: *οποίος* / *opios* "who"


### <a name="Art">`Art`</a>: article

Article is a special case of <b>determiner<\b> that bears the feature of
[definiteness](Definite). Modern Greek has a definite and an indefinite article. 

#### Examples

* definite article: _ο,του, τον, η, της, την, το, οι, των, τους, τα_
* indefinitie article _ένας, ενός, ένα, μία, μίας_ 

### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner or adverb

They are understood as determiners when they are followed by a noun. 

#### Examples
  
<b>Pronouns, Determiners<\b>
-	  *αυτός*  "this"
- *εκείνος*  "that" 
- *(ε)τούτος* "this/that"
- *τέτοιος*  "such"
- *τόσος*  "this/that many/much, so/as"
- *ίδιος* "the same"

<b>Demonstrative adverbs<\b>
  - *εδώ* ‘here'
  - *εκεί*`there'
  - *τώρα* ‘now'
  - *τότε* ‘then'
  
### <a name="Emp">`Emp`</a>: emphatic determiner

Emphatic pro-adjectives (determiners) emphasize the nominal they depend on.
There are similarities with reflexive and demonstrative pronouns / determiners.

#### Examples
-	 *ίδιος* "himself" e.g.,  *ήρθε ο ίδιος και μου είπε*  "he himself came  and told me..."
  
  
### <a name="Int">`Int`</a>: interrogative pronoun, determiner or adverb

They introduce direct or indirect questions.

#### Examples: 

- interrogative pronouns in direct questions: *ποιος*  "who", *πόσος* "how many/much", *τι*/ *ti* "what"
- interrogative determiners should be followed by a noun: *ποιος* "who", *πόσος* "how many/much", *τι* "what kind", e.g., _πόσο καιρό σε ξέρω;_ "_how long_ have I known you?"
-  interrogative adverb: *πού* ‘where', *πότε* ‘when', *πώς* ‘how', *γιατί*  ‘why'

### <a name="Prs">`Prs`</a>: personal or possessive personal pronoun or determiner

Μodern Greek have personal pronouns of two types: strong and weak  (clitics), e.g., 
the weak types *του το* in *του το έδωσα*  "I gave _it_ to _him_"

#### Examples

* the weak types: _μου, σου, με, σε, του, της, τον, την, το, μας, σας, τους, τις, τα_
* the strong types: _εγώ, εσύ, εμένα, εσένα, εμείς, εσείς, εμάς, εσάς_


### <a name="Rcp">`Rcp`</a>: reciprocal pronoun

This value is used for pronouns that are specifically reciprocal. If a reflexive pronoun can be used to convey reciprocal meaning,
it is still labeled as reflexive (`PronType=Prs|Reflex=Yes`). It is not marked as reciprocal in contexts in which it is used
reciprocally.

Reciprocal means that there is a plural subject and every member of the group does the thing described by the predicate to
every other member of the group. A reciprocal pronoun is used in the object position to signal such configuration.

#### Examples

* [de] _einander_ “each other”
* [da] _hinanden_ “each other”




### <a name="Rel">`Rel`</a>: relative pronoun, determiner, numeral or adverb

Note that in many languages this class heavily overlaps with
interrogatives, yet there are pronouns that are only relative, and in
some languages (Bulgarian, Hindi) the two classes are distinct.

#### Examples: 

* [cs] _jenž, což_ “which”, “that” (relative but not interrogative
  pronouns); _jehož_ “whose” (possessive relative pronoun)






### <a name="Tot">`Tot`</a>: total (collective) pronoun, determiner or adverb

#### Examples

* [cs/en] _každý / every, everybody, everyone, each, všechno /
  everything, all, všude / everywhere, vždy / always_

### <a name="Neg">`Neg`</a>: negative pronoun, determiner or adverb

Negative pronominal words are distinguished from negating [particles](u-pos/PART)
and from words that inflect for polarity (verbs, adjectives etc.) Those words
do not use `PronType=Neg`, they use `Polarity=Neg` instead. See the
[Polarity]() feature for further details.

#### Examples: 

* [cs/en] _nikdo / nobody, nic / nothing, nijaký / no, ničí / no
  one's_ (possessive negative determiner), _žádný / no, none, nikde /
  nowhere, nikdy / never, nijak / no way_ (lit. “no-how”)

### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner, numeral or adverb

Note that some tagsets might further subclassify this category to
distinguish “some” from “any” etc. Such distinctions are not part of
universal features but may be added in language-specific extensions.

#### Examples

* [cs/en] _někdo / somebody, něco / something, některý / some, něčí /
  someone's_ (possessive indefinite pronoun), _několik / a few,
  several_ (indefinite numeral/quantifier), _několikátý / “a fewth”,
  “severalth”_ (indefinite ordinal numeral), _několikrát / a few
  times, several times, někde / somewhere, někdy / sometimes, nějak /
  somehow_
* [cs/en] _kdokoli / anybody, cokoli / anything, kterýkoli / any,
  číkoli / anyone's_ (possessive indefinite pronoun), _kdekoli /
  anywhere, kdykoli / any time, jakkoli / anyhow_
* [cs/en] _málokdo / few people, leckdo / quite a few people, kdosi /
  somebody…_
