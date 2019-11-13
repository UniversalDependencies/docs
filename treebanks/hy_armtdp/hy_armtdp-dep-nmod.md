---
layout: base
title:  'Statistics of nmod in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="hy_armtdp-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="hy_armtdp-dep-nmod-poss.html">nmod:poss</a></tt>.

607 nodes (1%) are attached to their parents as `nmod`.

599 instances of `nmod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.17792421746293.

The following 13 pairs of parts of speech are connected with `nmod`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (230; 38% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (205; 34% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (124; 20% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-SYM.html">SYM</a></tt> (15; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-X.html">X</a></tt> (14; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-X.html">X</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Չորս	չորս	NUM	_	NumForm=Word|NumType=Card	2	nummod	_	Translit=Čors|LTranslit=čors
2	հատ	հատ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	nmod	_	Translit=hat|LTranslit=hat
3	երեք	երեք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing|NumForm=Word	5	obj	_	Translit=erek’|LTranslit=erek’
4	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	5	aux	_	Translit=ēr|LTranslit=em
5	ստացել	ստանալ	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=stac’el|LTranslit=stanal|SpaceAfter=No
6	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	Մարտի	մարտ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	2	nmod:poss	_	Translit=Marti|LTranslit=mart
2	12-ին	12	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing|NumForm=Digit	4	obl	_	Translit=12-in|LTranslit=12
3	տեղի	տեղ	NOUN	_	Animacy=Nhum|Case=Gen|Definite=Ind|Number=Sing|Style=Arch	4	compound:lvc	_	Translit=teġi|LTranslit=teġ
4	կունենա	ունենալ	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=kownena|LTranslit=ownenal
5	Տերտերյան	Տերտերյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	6	nmod	_	Translit=Terteryan|LTranslit=Terteryan
6	ֆեստի	ֆեստ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	nmod:poss	_	Translit=festi|LTranslit=fest
7	փակման	փակում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	8	nmod:poss	_	Translit=p’akman|LTranslit=p’akowm
8	համերգը	համերգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	Translit=hamergë|LTranslit=hamerg|SpaceAfter=No
9	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	Համերգը	համերգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	2	obj	_	Translit=Hamergë|LTranslit=hamerg
2	ղեկավարում	ղեկավարել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=ġekavarowm|LTranslit=ġekavarel
3	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	2	aux	_	Translit=ēr|LTranslit=em
4	դիրիժոր	դիրիժոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	5	nmod	_	Translit=dirižor|LTranslit=dirižor
5	Ռուբեն	Ռուբեն	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	nsubj	_	Translit=Ṙowben|LTranslit=Ṙowben
6	Ասատրյանը	Ասատրյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	5	flat	_	Translit=Asatryanë|LTranslit=Asatryan|SpaceAfter=No
7	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


