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

<table border="1">
  <tr><td rowspan="8">Core dependents of clausal predicates</td>
  <td>nsubj</td><td>Nominal subjects (typically a postpositional phrase
  with a case marker "が")</td>
  <td>太郎が(Taro-NOM) &lt;-nsubj- 走る(run)</td></tr>
  <tr><td>nsubjpass</td><td>Nominal subjects in passive forms</td><td>太郎が
  (Taro-NOM) &lt;-nsubjpass- ほめられる(praise-PASSIVE)</td></tr>
  <tr><td>dobj</td><td>Direct object (typically a postpositional phrase
  with a case marker "を")</td><td>ご飯を(rice-ACC) &lt;-dobj- 食べる
  (eat)</td></tr>
  <tr><td>iobj</td><td>Indirect object (typicall a postpositional phrase
  with a case marker "に")</td><td>花子に(Hanako-ACC) &lt;-iobj- あげる
  (give)</td></tr>
  <tr><td>csubj</td><td>Clausal subjects introduced by a nominal marker "の"</td>
  <td>太郎が(Taro-NOM)怒られる(punish-PASSIVE)の(NOMINAL)は(TOPIC)
  &lt;-csubj- いやだ(dislike)</td></tr>
  <tr><td>csubjpass</td><td>Clausal subjects in passive forms</td><td>言った
  (say-PAST)の(NOMINAL)が(NOM) &lt;-csubjpass- 悔やまれる(feel bad)</td></tr>
  <tr><td>ccomp</td><td>Complement clause (typically a clause introduced by
  "と")</td><td>太郎は花子が好きだと(Taro loves Hanako-CL) &lt;-ccomp- 思う(think)</td></tr>
  <tr><td>xcomp</td><td>Not used in Japanese</td><td><br></td></tr>
  <tr><td rowspan="4">Non-core dependents of clausal predicate</td>
  <td>nmod</td><td>Prepositional/noun phrases modifying another
  phrase</td><td>北海道へ(Hokkaido-TO) &lt;-nmod- 行く(go)、昨日(yesterday)
  &lt;-nmod- 行った(go-PAST)</td></tr>
  <tr><td>advcl</td><td>Subordinate clause</td><td>食べた(eat)なら(if) &lt;-advcl- 行く(go)</td></tr>
  <tr><td>advmod</td><td>Adverbial modifiers</td><td>ゆっくり(slowly) &lt;-advmod- 走る(run)</td></tr>
  <tr><td>neg</td><td>Negation with "ない" "ず"</td><td>食べ(eat) -neg-&gt; ない
  (NEG)、走ら(run) -neg-&gt; ず(NEG)</td></tr>
  <tr><td rowspan="7">Noun dependents</td>
  <td>nummod</td><td>Numeral classifier phrases</td><td>3冊の(three books-OF) &lt;-nummod- 本(books)</td></tr>
  <tr><td>appos</td><td>Appositive relations</td><td>形態素解析器(morphological analyzer) &lt;-appos- juman</td></tr>
  <tr><td>nmod</td><td>Prepositional phrases modifying another phrase</td><td>リンゴの(apple-OF) &lt;-nmod- ジュース(juice)</td></tr>
  <tr><td>acl</td><td>Relative clause, clausal complement of nouns</td><td>太郎
  が食べた(Taro-NOM eat-PAST) &lt;-acl- リンゴ(apple)、ほめられた
  (praise-PASSIVE) &lt;-acl- こと(fact)</td></tr>
  <tr><td>amod</td><td>Adjectival modifiers; adjectives with arguments are
  tagged as "acl"</td><td>きれいな(beautiful) &lt;-amod- 本(book)</td></tr>
  <tr><td>det</td><td>この/こんな(this)、あの/あんな(that)、その/そんな(that)、どの/どんな(which)
  modifying a noun</td><td>この(this) &lt;-det- 本(book)</td></tr>
  <tr><td>neg</td><td>Negation with "ない"</td><td>ない(NEG) &lt;-neg- 本(book)</td></tr>
  <tr><td>Case-marking, prepositions, possessive</td><td>case</td><td>Postpositions and particles attach to a noun
  phrase</td><td>太郎(Taro) -case-&gt; が(NOM)、太郎(Taro) -case-&gt; の(POSS)、
  東京(Tokyo) -case-&gt; へ(TO)</td></tr>
  <tr><td rowspan="5">Compounding and unanalyzed</td>
  <td>compound</td><td>Noun compounds, verb compounds</td><td>構文(syntax)
  &lt;-compound- 解析(analysis)、泳ぎ(swim) &lt;-compound- 着く(reach)</td></tr>
  <tr><td>name</td><td>Proper noun compounds</td><td>山田(Yamada) -name-&gt; 太郎(Taro)</td></tr>
  <tr><td>mwe</td><td>Multi-word functional expressions</td><td>に -mwe-&gt; よって
  (by)、かも -mwe-&gt; しれ -mwe-&gt; ない (maybe)</td></tr>
  <tr><td>foreign</td><td>Foreign words in non-Japanese
  characters</td><td>google &lt;-foreign- docs</td></tr>
  <tr><td>goeswith</td><td>used when a word is somehow split into tokens</td><td><br></td></tr>
  <tr><td rowspan="5">Loose joining relations</td>
  <td>list</td><td>Listing</td><td>1. 東京(Tokyo) &lt;-list- 2. 大阪(Osaka)</td></tr>
  <tr><td>dislocated</td><td>a topic phrase (typically a prepositional
  phrase with topic marker "は")</td><td>象は(elephant-TOPIC) &lt;-dislocated-
  (鼻が(nose-NOM) &lt;-nsubj- 長い(long))</td>/tr>
  <tr><td>parataxis</td><td>Listing of sentences</td><td>「太郎は花子が好き(Taro
  loves Hanako)。&lt;-parataxis- 次郎は梅子が好き。(Jiro loves Umeko)」と
  三郎が言った(Saburo said)。</td></tr>
  <tr><td>remnant</td><td>used to annotate head-less coordination (see the
  definition in Universal Dependencies for details)</td><td><br></td></tr>
  <tr><td>reparandum</td><td>speech repair</td><td>(大阪(Osaka)、えー(Umm)、) &lt;-reparandum- 梅田(Umeda) に(TO) 行きます(go)。</td></tr>
  <tr><td rowspan="8">Special clausal dependents</td>
  <td>vocative</td><td>dialogue participant names in text</td><td>太郎(Taro) &lt;-vocative- 食べなさい(eat)</td></tr>
  <tr><td>discourse</td><td>discourse elements like interjection and
  emoticons</td><td>あー(ah) &lt;-discourse- つかれた(tired)</td></tr>
  <tr><td>expl</td><td>not used in Japanese</td><td><br></td></tr>
  <tr><td>aux</td><td>auxiliary verbs and particles that attach to
  verbs</td><td>食べ(eat) -aux-&gt; た(past)、(行き(go) -aux-&gt; ます(POLITE))
  -aux-&gt; か(QUESTION)</td></tr>
  <tr><td>auxpass</td><td>passive auxiliary</td><td>食べ(eat) -auxpass-&gt; られる(PASSIVE)</td></tr>
  <tr><td>cop</td><td>copular auxiliary "だ"</td><td>太郎は(Taro-TOPIC) &lt;-nsubj-
  学生(student) -cop-&gt; だ(COPULA)</td></tr>
  <tr><td>mark</td><td>subordinating conjunction, conjunctive particle,
  complementizer ("と", "か)</td><td>東京へ行く(go to Tokyo) -mark-&gt; と 言った</td></tr>
  <tr><td>punct</td><td>punctuations</td><td>太郎が走る(Taro runs) -punct-&gt; 。</td>
  </tr>
  <tr><td rowspan="3">Coordination</td>
  <td>conj</td><td>coordination</td><td>(太郎 -cc-&gt; と) -conj-&gt; 次郎</td>/tr>
  <tr><td>cc</td><td>conjunction, coordinating conjunctive particle
  (e.g. "と", "や")</td><td>(太郎 -cc-&gt; と) -conj-&gt; 次郎、また、&lt;-cc- …</td></tr>
  <tr><td>punct</td><td>punctuations</td><td>(太郎 -punct-&gt; 、) -conj-&gt; 次郎</td></tr>
  <tr><td rowspan="2">Other</td>
  <td>root</td><td>head of a sentence</td><td><br></td></tr>
  <tr><td>dep</td><td>undefined</td><td><br></td></tr>
</table>

