---
layout: feature
title: 'Person[psor]'
shortdef: 'possessor’s person'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#1">1</a></td>
  <td><a href="#2">2</a></td>
  <td><a href="#3">3</a></td>
</tr>
</table>

`Person[psor]` is the possessor's person, marked for exmaple on [nouns](NOUN), [emphatic pronouns](PronType), [infinitives](VerbForm), or [adpositions](ADP). In possessive uses, such forms typically correspond to an English possessive pronouns followed by a noun.

We do not annotate possessive determiners with `Person[psor]`, as they are actually identical to personal pronouns in the genitive case.

Note that Middle Armenian grammars distinguish possessive, demonstrative, and personal articles (suffixes) in addition to the definite article. The same set of suffixes serves all three functions. Depending on the context, they may indicate that the referent is near the speaker (proximal, first person), near the addressee (second person), or distant from both (third person), or they may express possession by one of them. Consequently, the subscript `[psor]` does not always denote a possessor in this feature, as the same annotation is also used for the person-indexing function of these suffixes. The person-indexing and possessive functions can only be distinguished from context.

See also the related features `Number[psor]` and `Deixis[psor]`.

### <a name="1">`1`</a>: first person possessor

#### Examples

* _Մինչ որ վճարի պարտքեր<b>ս</b>_ (`Number=Plur|Number[psor]=Sing|Person[psor]=1`), _որ ի յիմ շալակ<b>ս</b>_ (`Number=Sing|Number[psor]=Sing|Person[psor]=1`) _է կուսած_/_Minč or vč̣ari partk’ers, or i yim šalaks ē kowsaç_ “Until He pays <b>my</b> debts, which have accumulated upon <b>my</b> shoulders”
* _դատիլ<b>ս</b> շահ է_/_datils šah ē_ “<b>my</b> being judged is a gain” `Number[psor]=Sing|Person[psor]=1`

### <a name="2">`2`</a>: second person possessor

#### Examples

* _Աչեր<b>դ</b> է ի ծով նըման_/_Ačerd ē i çov nëman_ “<b>your</b> eyes are like the sea” `Number=Plur|Number[psor]=Sing|Person[psor]=2`
* _գնալներ<b>դ</b>_/_gnalnerd_ “your (pl.) going” `Number[psor]=Plur|Person[psor]=2`

### <a name="3">`3`</a>: third person possessor

#### Examples

* _Թագուոր մի կայր, աչուի<b>ն</b> էր խաժ_/_T’agowor mi kayr, ačowin ēr xaž_ “There was a king; <b>his</b> eyes were sea-blue” `Number=Plur|Number[psor]=Sing|Person[psor]=3`
  
<!-- Interlanguage links updated Út 30. června 2026, 10:59:11 CEST -->
