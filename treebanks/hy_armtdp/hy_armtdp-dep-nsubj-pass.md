---
layout: base
title:  'Statistics of nsubj:pass in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="hy_armtdp-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="hy_armtdp-dep-nsubj-outer.html">nsubj:outer</a></tt>.

621 nodes (1%) are attached to their parents as `nsubj:pass`.

315 instances of `nsubj:pass` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.84219001610306.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (533; 86% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (65; 10% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (14; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 nsubj:pass	color:blue
1	Այդ	այդ	DET	_	Deixis=Med|PronType=Dem	2	det	_	Translit=Ayd|LTranslit=ayd
2	ջրով	ջուր	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	4	obl	_	Translit=ǰrov|LTranslit=ǰowr
3	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=en|LTranslit=em
4	ոռոգվում	ոռոգել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=oṙogvowm|LTranslit=oṙogel
5	նաև	նաև	CCONJ	_	ConjType=Comp	4	cc	_	Translit=naew|LTranslit=naew
6	56	56	NUM	_	NumForm=Digit|NumType=Card	7	nummod	_	Translit=56|LTranslit=56
7	հեկտար	հեկտար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	8	nmod	_	Translit=hektar|LTranslit=hektar
8	այգիները	այգի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	4	nsubj:pass	_	Translit=ayginerë|LTranslit=aygi|SpaceAfter=No
9	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Դա	դա	PRON	_	Case=Nom|Deixis=Med|Number=Sing|PronType=Dem	2	nsubj:pass	_	Translit=Da|LTranslit=da
2	արտահայտվեց	արտահայտել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=artahaytvec’|LTranslit=artahaytel
3	հիմնականում	հիմնականում	ADV	_	_	4	advmod:emph	_	Translit=himnakanowm|LTranslit=himnakanowm
4	ներմուծման	ներմուծում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	6	nmod:poss	_	Translit=nermowçman|LTranslit=nermowçowm
5	առաջանցիկ	առաջանցիկ	ADJ	_	_	6	amod	_	Translit=aṙaǰanc’ik|LTranslit=aṙaǰanc’ik
6	աճի	աճ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	7	nmod:poss	_	Translit=ač̣i|LTranslit=ač̣
7	տեսքով	տեսք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	2	obl	_	Translit=tesk’ov|LTranslit=tesk’|SpaceAfter=No
8	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:pass	color:blue
1	1953	1953	NUM	_	NumForm=Digit|NumType=Card	2	nummod	_	Translit=1953|LTranslit=1953
2	թվականին	թվական	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	6	obl	_	Translit=t’vakanin|LTranslit=t’vakan
3	Մ	Մ.	PROPN	_	Abbr=Yes|Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	6	nsubj:pass	_	Translit=M|LTranslit=M.|SpaceAfter=No
4	.	.	PUNCT	_	Foreign=Yes	3	punct	_	Translit=.|LTranslit=.
5	Շահնազարյանն	Շահնազարյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	3	flat:name	_	Translit=Šahnazaryann|LTranslit=Šahnazaryan
6	ընդունվում	ընդունել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=ëndownvowm|LTranslit=ëndownel
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	Translit=ē|LTranslit=em
8	ՍՄԿԿ	ՍՄԿԿ	PROPN	_	Abbr=Yes|Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Com|Number=Sing	11	nmod:poss	_	Translit=SMKK|LTranslit=SMKK|SpaceAfter=No
9	-	-	PUNCT	_	_	10	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
10	ի	ը	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Hyph=Yes|Number=Sing	8	dep	_	Translit=i|LTranslit=ë
11	շարքերը	շարք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	6	obl	_	Translit=šark’erë|LTranslit=šark’|SpaceAfter=No
12	։	։	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


