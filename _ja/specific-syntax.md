---
layout: base
title:  'Syntax'
---

# Specific constructions

This document describes specific issues we encountered when applying
the schema of Universal Dependencies to Japanese syntax.

## サ変 / <i>Sahen</i> verbs

Many verbs in Japanese have the form that a noun is followed by a
verbal suffix する / <i>suru</i> "do".

* 勉強 する / <i>benkyo suru</i> "study"
* 登校 する / <i>toko suru</i> "go to a school"

Since the first part (勉強, 登校) can be used as a noun (e.g. 勉強 が
好き / <i>benkyo ga suki</i> "(I) like studying", the problem here is
which word can be considered as a main verb.  We have the following
choices for this analysis.

~~~ sdparse
勉強 する
aux(勉強, する)
~~~

~~~ sdparse
勉強 する
nmod(する, 勉強)
~~~

The first analysis regards 勉強 as a main verb, and する as an
auxiliary verb.  The second analysis regards する as a main verb, and
勉強 as a modifier.

We choose the first analysis, mainly because the noun part carries
semantic content, as well as syntactic frames.

## Suffixes changing POS

A similar issue appears in other constructions.  The suffix さ /
<i>sa</i> changes an adjective into a noun, and っぽい / <i>ppoi</i>
changes a noun into an adjective.

* かわい さ / <i>kawai sa</i> "cuteness"
* 春 っぽい / <i>haru ppoi</i> "spring-like"

We choose the analysis similar to the case of サ変, in which we
regard the first content word as a head, and the suffix as a function
word.

~~~ sdparse
かわい さ
mark(かわい, さ)
~~~

## Auxiliary verbs

The distinction between main verbs and auxiliary verbs are unclear in
some cases.

* 走っ _た_ / <i>hashit ta</i> "ran"
* 走っ て _いる_ / <i>hashit te iru</i> "running"
* 走っ て _ほしい_ / <i>hashit te hoshii</i> "want (you) to run"
* 走り _始める_ / <i>hashiri hajimeru</i> "begin to run"

The first example is a clear case of an auxiliary verb, because た
does not appear independently.  The other cases are unclear, because
the verbs like いる, ほしい, 始める can be used as a main verb.
However, in the above examples, proper meanings of these verbs are
lost (this is similar to a light verb) and auxiliary meanings are
added to a preceding verb.

These verbs are defined as 非自立 <i>hijiritsu</i> in UniDic, and we
define 非自立 verbs preceded by another verb as an auxiliary verb.  If
these verbs appear independently, they are regarded as a main verb.

~~~ sdparse
太郎 が 走り 始める
nsubj(走り, 太郎)
aux(走り, 始める)
~~~

~~~ sdparse
商売 を 始め た
dobj(始め, 商売)
aux(始め, た)
~~~

## Distinction between `nsubj` vs. `csubj`

Dependency labels of Universal Dependencies are sensitive to the
distinction between a clause and a non-clause; e.g,
`nsubj` vs. `csubj` and `amod` vs. `acl`.  However, it is not evident
what is "clause" in Japanese.  In the case of the distinction between
`nsubj` and `csubj`, we have the following gradation.

* 食べる _の_ が 好き / <i>taberu no ga suki</i> "(I) like eating"
* 食べる _こと_ が 好き / <i>taberu koto ga suki</i> "(I) like eating"
* 食べる _ところ_ が 好き / <i>taberu tokoro ga suki</i> "(I) like where eating"
* 食べる _まで_ が 好き / <i>taberu made ga suki</i> "(I) like (the situation) before eating"

The first one is a clear case, because の does not appear
independently.  This can be regarded as a complementizer.  However,
the following cases are not clear.  こと, ところ are used as a noun,
but in these examples they have light meanings.  In particular, the
second example has almost the same meaning as the first one.  The last
example, まで, is a function word, but in this case it adds an
additional meaning.

In the current definition, we define the first case, i.e., a phrase
introduced by の, is a clausal subject, while the other cases are
regarded as a noun phrase.

~~~ sdparse
食べる の が 好き
mark(食べる, の)
case(食べる, が)
csubj(好き, 食べる)
~~~

~~~ sdparse
食べる こと が 好き
acl(こと, 食べる)
case(こと, が)
nsubj(好き, こと)
~~~

## Distinction between `amod` and `acl`

A similar issue appears for the distinction between `amod` and `acl`.
In Japanese, relative clauses do not accompany with a relativizer, and
a simple adjective-noun construction has no difference from a relative
construction.

* かわいい 人形 / <i>kawaii ningyo</i> "cute doll"
* とても かわいい 人形 / <i>totemo kawaii ningyo</i> "very cute doll"
* 服 が かわいい 人形 / <i>fuku ga kawaii ningyo</i> "a doll whose cloth is cute"
* かわいかっ た 人形 / <i>kawaikat ta ningyo</i> "a doll which was cute"

There is no clear boundary in these examples.  A possible solution is
to regard everything as `acl`, and never use `amod`.  However, this
analysis decreases the parallelism with other languages.  Therefore,
we give the following definition.

* `amod`: an adjective without any arguments (e.g. `nsubj`) and
  auxiliary verbs (e.g. た / <i>ta</i>)
* `acl`: otherwise

In the above examples, the first two cases are annotated as `amod`,
while the others are as `acl`.

~~~ sdparse
かわいい 人形
amod(人形, かわいい)
~~~

~~~ sdparse
服 が かわいい 人形
nsubj(かわいい, 服)
acl(人形, かわいい)
~~~

This definition gives analyses mostly corresponding to English
translations.  However, this is not a linguistically justified
definition and a better solution is necessary.

## Voice

In Universal Dependencies, passive voice is marked with special
dependency labels like `nsubjpass` and `auxpass`.  This is useful for
recognizing semantic dependencies.  However, Japanese syntax involves
other voice that involves case alternations.

* causative: 太郎 が 次郎 に りんご を 食べ させる / <i>Taro ga Jiro
  ni ringo o tabe saseru</i> "Taro makes Jiro eat an apple"
* benefactive: 太郎 が 次郎 に りんご を 食べ て もらう / <i>Taro ga
  Jiro ni ringo o tabe te morau</i> "Taro asks Jiro to eat an apple"

The problem here is that auxiliary verbs like させる and もらう
changes case markers (e.g. 次郎 is a subject of 食べ, but is marked
with に).  In addition, these constructions introduces an additional
argument (太郎 in these cases), which is a causer in the first example
and a benefactive in the second.  We don't have a method to indicate
these case alternations in Universal Dependencies.

Currently, we give dependency labels based on surface expressions,
without any markings of case alternations.

~~~ sdparse
太郎 が 次郎 に りんご を 食べ させる
nsubj(食べ, 太郎)
dobj(食べ, りんご)
iobj(食べ, 次郎)
aux(食べ, させる)
~~~

~~~ sdparse
太郎 が 次郎 に りんご を 食べ て もらう
nsubj(食べ, 太郎)
dobj(食べ, りんご)
iobj(食べ, 次郎)
aux(食べ, もらう)
~~~

