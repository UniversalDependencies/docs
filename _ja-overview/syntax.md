---
layout: base
title:  'Syntax'
permalink: ja/overview/syntax.html
---

# Syntax

Syntactic dependency labels in Japanese are defined in conformity with
the principles of Universal Dependencies as far as possible.  However,
the definition of Japanese syntax under Universal Dependencies
involves several issues to be discussed.  For example, the definition
of "clause" is not clear, while dependency labels rely on the
definition of "clause", such as the distinction between "nsubj" and
"csubj".  These issues are still under discussions and we have not yet
reached the sufficient definition of Japanese syntax.

Currently, we give an informal definition of dependency labels with a
couple of examples as described below.

<table>
  <tr><td rowspan="8">Core dependents of clausal predicates
  <td>nsubj<td>Nominal subjects (typically a postpositional phrase
  with a case marker "が")
  <td>太郎が(Taro-NOM) &lt;-nsubj- 走る(run)</tr>
  <tr><td>nsubjpass<td>Nominal subjects in passive forms<td>太郎が
  (Taro-NOM) &lt;-nsubjpass- ほめられる(praise-PASSIVE)</tr>
  <tr><td>dobj<td>Direct object (typically a postpositional phrase
  with a case marker "を")<td>ご飯を(rice-ACC) &lt;-dobj- 食べる
  (eat)</tr>
  <tr><td>iobj<td>Indirect object (typicall a postpositional phrase
  with a case marker "に")<td>花子に(Hanako-ACC) &lt;-iobj- あげる
  (give)</tr>
  <tr><td>csubj<td>Clausal subjects introduced by a nominal marker "の"
  <td>太郎が(Taro-NOM)怒られる(punish-PASSIVE)の(NOMINAL)は(TOPIC)
  &lt;-csubj- いやだ(dislike)</tr>
  <tr><td>csubjpass<td>Clausal subjects in passive forms<td>言った
  (say-PAST)の(NOMINAL)が(NOM) &lt;-csubjpass- 悔やまれる(feel bad)</tr>
  <tr><td>ccomp<td>Complement clause (typically a clause introduced by
  "と")<td>太郎は花子が好きだと(Taro loves Hanako-CL) &lt;-ccomp- 思う(think)</tr>
  <tr><td>xcomp<td>Not used in Japanese<td><br></tr>
  <tr><td rowspan="4">Non-core dependents of clausal predicate
  <td>nmod<td>Prepositional/noun phrases modifying another
  phrase<td>北海道へ(Hokkaido-TO) &lt;-nmod- 行く(go)、昨日(yesterday)
  &lt;-nmod- 行った(go-PAST)</tr>
  <tr><td>advcl<td>Subordinate clause<td>食べた(eat)なら(if) &lt;-advcl- 行く(go)</tr>
  <tr><td>advmod<td>Adverbial modifiers<td>ゆっくり(slowly) &lt;-advmod- 走る(run)</tr>
  <tr><td>neg<td>Negation with "ない" "ず"<td>食べ(eat) -neg-&gt; ない
  (NEG)、走ら(run) -neg-&gt; ず(NEG)</tr>
  <tr><td rowspan="7">Noun dependents
  <td>nummod<td>Numeral classifier phrases<td>3冊の(three books-OF) &lt;-nummod- 本(books)</tr>
  <tr><td>appos<td>Appositive relations<td>形態素解析器(morphological analyzer) &lt;-appos- juman</tr>
  <tr><td>nmod<td>Prepositional phrases modifying another phrase<td>リンゴの(apple-OF) &lt;-nmod- ジュース(juice)</tr>
  <tr><td>acl<td>Relative clause, clausal complement of nouns<td>太郎
  が食べた(Taro-NOM eat-PAST) &lt;-acl- リンゴ(apple)、ほめられた
  (praise-PASSIVE) &lt;-acl- こと(fact)</tr>
  <tr><td>amod<td>Adjectival modifiers; adjectives with arguments are
  tagged as "acl"<td>きれいな(beautiful) &lt;-amod- 本(book)</tr>
  <tr><td>det<td>この(this)、あの(that)、その(that)、どの(which)
  modifying a noun<td>この(this) &lt;-det- 本(book)</tr>
  <tr><td>neg<td>Negation with "ない"<td>ない(NEG) &lt;-neg- 本(book)</tr>
  <tr><td>Case-marking, prepositions, possessive<td>case<td>Postpositions and particles attach to a noun
  phrase<td>太郎(Taro) -case-&gt; が(NOM)、太郎(Taro) -case-&gt; の(POSS)、
  東京(Tokyo) -case-&gt; へ(TO)</tr>
  <tr><td rowspan="5">Compounding and unanalyzed
  <td>compound<td>Noun compounds, verb compounds<td>構文(syntax)
  &lt;-compound- 解析(analysis)、泳ぎ(swim) &lt;-compound- 着く(reach)</tr>
  <tr><td>name<td>Proper noun compounds<td>山田(Yamada) -name-&gt; 太郎(Taro)</td>
  <tr><td>mwe<td>Multi-word functional expressions<td>に -mwe-&gt; よって
  (by)、かも -mwe-&gt; しれ -mwe-&gt; ない (maybe)</tr>
  <tr><td>foreign<td>Foreign words in non-Japanese
  characters<td>google &lt;-foreign- docs</tr>
  <tr><td>goeswith<td>used when a word is somehow split into tokens<td><br></tr>
  <tr><td rowspan="5">Loose joining relations
  <td>list<td>Listing<td>1. 東京(Tokyo) &lt;-list- 2. 大阪(Osaka)</tr>
  <tr><td>dislocated<td>a topic phrase (typically a prepositional
  phrase with topic marker "は")<td>象は(elephant-TOPIC) &lt;-dislocated-
  (鼻が(nose-NOM) &lt;-nsubj- 長い(long))</tr>
  <tr><td>parataxis<td>Listing of sentences<td>「太郎は花子が好き(Taro
  loves Hanako)。&lt;-parataxis- 次郎は梅子が好き。(Jiro loves Umeko)」と
  三郎が言った(Saburo said)。</tr>
  <tr><td>remnant<td>used to annotate head-less coordination (see the
  definition in Universal Dependencies for details)<td><br></tr>
  <tr><td>reparandum<td>speech repair<td>(大阪(Osaka)、えー(Umm)、) <-reparandum- 梅田(Umeda) に(TO) 行きます(go)。</tr>
  <tr><td rowspan="8">Special clausal dependents
  <td>vocative<td>dialogue participant names in text<td>太郎(Taro) &lt;-vocative- 食べなさい(eat)</tr>
  <tr><td>discourse<td>discourse elements like interjection and
  emoticons<td>あー(ah) &lt;-discourse- つかれた(tired)</tr>
  <tr><td>expl<td>not used in Japanese<td><br></tr>
  <tr><td>aux<td>auxiliary verbs and particles that attach to
  verbs<td>食べ(eat) -aux-&gt; た(past)、(行き(go) -aux-&gt; ます(POLITE))
  -aux-&gt; か(QUESTION)</tr>
  <tr><td>auxpass<td>passive auxiliary<td>食べ(eat) -auxpass-&gt; られる(PASSIVE)</tr>
  <tr><td>cop<td>copular auxiliary "だ"<td>太郎は(Taro-TOPIC) &lt;-nsubj-
  学生(student) -cop-&gt; だ(COPULA)</tr>
  <tr><td>mark<td>subordinating conjunction, conjunctive particle,
  complementizer ("と", "か)<td>東京へ行く(go to Tokyo) -mark-&gt; と 言った</tr>
  <tr><td>punct<td>punctuations<td>太郎が走る(Taro runs) -punct-&gt; 。
  </tr>
  <tr><td rowspan="3">Coordination
  <td>conj<td>coordination<td>(太郎 -cc-&gt; と) -conj-&gt; 次郎</tr>
  <tr><td>cc<td>conjunction, coordinating conjunctive particle
  (e.g. "と", "や")<td>(太郎 -cc-&gt; と) -conj-&gt; 次郎、また、&lt;-cc- …</tr>
  <tr><td>punct<td>punctuations<td>(太郎 -punct-&gt; 、) -conj-&gt; 次郎</tr>
  <tr><td rowspan="2">Other
  <td>root<td>head of a sentence<td><br></tr>
  <tr><td>dep<td>undefined<td><br></tr>
</table>

