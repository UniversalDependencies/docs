---
layout: base
title:  'Statistics of compound in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="ota_dudu-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="ota_dudu-dep-compound-redup.html">compound:redup</a></tt>.

119 nodes (1%) are attached to their parents as `compound`.

111 instances of `compound` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10924369747899.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (100; 84% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (11; 9% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ota_dudu-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_dudu-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	ḫalḳuñ	ḫalḳ	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	_
2	izdiḥâmına	izdiḥâm	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obl	_	_
3	binâʾen	binâʾen	ADP	PCDat	_	2	case	_	_
4	bekke	bekke	PROPN	Place	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Person=3	5	nsubj	_	_
5	taʿbîr	taʿbîr	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	ḳılınmışdur	ḳıl	VERB	_	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Pass	5	compound	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	anası	ana	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nsubj	_	_
2	daḫı	daḫı	PART	Emph	_	1	advmod:emph	_	_
3	destûr	destûr	ADJ	Adj	_	0	root	_	_
4	virdi	vir	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	3	compound	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 compound	color:blue
1	sulṭân	sulṭân	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	burhân	burhân	PROPN	Pers	Case=Nom|Gender=Masc|NameType=Prs|Number=Sing|Person=3	9	nsubj	_	_
3	ol	ol	DET	Demons	Definite=Def|PronType=Art	4	det	_	_
4	furṣatı	furṣat	NOUN	_	Case=Acc|Number=Sing|Person=3	5	obj	_	_
5	ġanîmet	ġanîmet	NOUN	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	compound	_	_
6	bilüp	bil	VERB	Conv	Polarity=Pos|VerbForm=Conv	5	compound	_	_
7	tekrâr	tekrâr	ADV	_	_	9	advmod	_	_
8	şirvâna	şirvân	PROPN	Place	Case=Dat|NameType=Geo|Number=Sing|Person=3	9	obl	_	_
9	müstevlî	müstevlî	ADJ	Adj	_	0	root	_	_
10	oldı	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	9	compound:lvc	_	_

~~~


