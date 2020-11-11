---
layout: base
title:  'Statistics of dislocated in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `dislocated`

This relation is universal.

28 nodes (0%) are attached to their parents as `dislocated`.

28 instances of `dislocated` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.64285714285714.

The following 9 pairs of parts of speech are connected with `dislocated`: <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (9; 32% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (4; 14% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (4; 14% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (3; 11% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 dislocated	color:blue
1	Kapusuz	Kapusuz	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
2	şöyle	şöyle	ADV	Adverb	_	3	advmod	_	_
3	konuştu	konuş	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
4	:	:	PUNCT	Punc	_	3	punct	_	_
5	"	"	PUNCT	Punc	_	8	punct	_	SpaceAfter=No
6	Bu	bu	DET	Det	_	7	det	_	_
7	sözleri	söz	NOUN	Noun	Case=Acc|Number=Plur|Person=3	9	nsubj	_	_
8	tasvip	tasvip	VERB	Verb	Case=Nom|Number=Sing|Person=3	2	dislocated	_	_
9	etmiyoruz	et	VERB	Verb	Aspect=Prog|Number=Plur|Person=1|Polarity=Neg|Tense=Pres	8	compound:lvc	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 19 dislocated	color:blue
1	KBB	KBB	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	nmod:poss	_	_
2	doktorlarının	doktor	NOUN	Noun	Case=Gen|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
3	hastalarına	hasta	NOUN	Noun	Case=Dat|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3	4	obl	_	_
4	söyledikleri	söyle	VERB	Verb	Aspect=Perf|Number[psor]=Plur|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	7	acl	_	_
5	ünlü	ünlü	ADJ	Adj	Case=Nom|Number=Sing|Person=3	7	amod	_	_
6	bir	bir	DET	ANum	NumType=Card	7	det	_	_
7	söz	söz	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	nsubj	_	_
8	var	var	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
9	dır	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	8	cop	_	_
10	:	:	PUNCT	Punc	_	8	punct	_	_
11	"	"	PUNCT	Punc	_	19	punct	_	SpaceAfter=No
12	Kulağınıza	kulak	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2	19	obl	_	_
13	dirseğinizden	dirsek	ADV	Noun	Case=Abl|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2	15	advmod	_	_
14	daha	daha	ADV	Adverb	_	15	advmod	_	_
15	küçük	küçük	ADJ	Adj	_	17	amod	_	_
16	bir	bir	DET	ANum	NumType=Card	17	det	_	_
17	şeyi	şey	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	19	obj	_	_
18	asla	asla	ADV	Adverb	_	19	advmod	_	_
19	sokmayınız	sok	NOUN	Noun	Mood=Imp|Number=Plur|Person=2|Polarity=Neg	7	dislocated	_	SpaceAfter=No
20	!	!	PUNCT	Punc	_	19	punct	_	SpaceAfter=No
21	"	"	PUNCT	Punc	_	19	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 dislocated	color:blue
1	Her	her	DET	Det	_	2	det	_	_
2	temsilden	temsil	NOUN	Noun	Case=Abl|Number=Sing|Person=3	6	obl	_	_
3	önce	önce	ADP	PCAbl	_	2	case	_	_
4	oyuncularıma	oyun	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	6	obl	_	_
5	şunu	şu	PRON	Demons	Case=Acc|Number=Sing|Person=3	6	obj	_	_
6	söylerdim	söyle	VERB	Verb	Aspect=Hab|Evident=Fh|Number=Sing|Person=1|Polarity=Pos|Tense=Aor	0	root	_	SpaceAfter=No
7	:	:	PUNCT	Punc	_	6	punct	_	_
8	"	"	PUNCT	Punc	_	12	punct	_	SpaceAfter=No
9	Günden	gün	ADV	Noun	Case=Abl|Number=Sing|Person=3	11	advmod	_	_
10	güne	gün	NOUN	Noun	Case=Dat|Number=Sing|Person=3	9	compound:redup	_	_
11	uydurduklarımız	uy	NOUN	Noun	Aspect=Perf|Case=Nom|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=1|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Cau	12	obl	_	_
12	tükendi	tüken	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	5	dislocated	_	SpaceAfter=No
13	.	.	PUNCT	Punc	_	12	punct	_	SpacesAfter=\n

~~~


