---
layout: base
title:  'Statistics of compound:redup in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="ota_dudu-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="ota_dudu-dep-compound-lvc.html">compound:lvc</a></tt>.

43 nodes (0%) are attached to their parents as `compound:redup`.

43 instances of `compound:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06976744186047.

The following 8 pairs of parts of speech are connected with `compound:redup`: <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (16; 37% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (11; 26% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (5; 12% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (5; 12% instances), <tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (2; 5% instances), <tt><a href="ota_dudu-pos-DET.html">DET</a></tt>-<tt><a href="ota_dudu-pos-DET.html">DET</a></tt> (2; 5% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound:redup	color:blue
1	ḫayli	ḫayli	ADV	_	_	6	advmod	_	_
2	ol	ol	DET	Demons	Definite=Def|PronType=Art	3	det	_	_
3	yaña	yan	NOUN	_	Case=Nom|Number=Sing|Person=3	6	obl	_	_
4	bu	bu	DET	Demons	Definite=Def|PronType=Art	5	det	_	_
5	yaña	ya	NOUN	_	Case=Dat|Number=Sing|Person=3	3	compound:redup	_	_
6	yildi	yil	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:redup	color:blue
1	ve	ve	CCONJ	_	_	5	cc	_	_
2	aġır	aġır	ADJ	Adj	_	4	amod	_	_
3	aġır	aġır	ADJ	Adj	_	2	compound:redup	_	_
4	binālara	binā	NOUN	_	Case=Dat|Number=Plur|Person=3	5	obl	_	_
5	ṣarf	ṣarf	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	itmezlerdi	it	VERB	_	Aspect=Hab|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	5	compound:lvc	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:redup	color:blue
1	bunlar	bu	PRON	Pers	Case=Nom|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	_
2	daḫı	daḫı	PART	Emph	_	1	advmod:emph	_	_
3	başlarına	baş	NOUN	_	Case=Dat|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3	4	obl	_	_
4	gelen	gel	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	5	acl	_	_
5	aḥvāli	ḥāl	NOUN	_	Case=Acc|Gender=Fem|Number=Plur|Person=3	8	obj	_	_
6	bir	bir	ADV	_	_	8	advmod	_	_
7	bir	bir	ADV	_	_	6	compound:redup	_	_
8	ḫaber	ḫaber	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
9	virdiler	vir	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	8	compound	_	_

~~~


