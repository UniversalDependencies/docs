---
layout: base
title:  'Statistics of nsubj in UD_Abaza-ATB'
udver: '2'
---

## Treebank Statistics: UD_Abaza-ATB: Relations: `nsubj`

This relation is universal.

82 nodes (13%) are attached to their parents as `nsubj`.

73 instances of `nsubj` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95121951219512.

The following 5 pairs of parts of speech are connected with `nsubj`: <tt><a href="abq_atb-pos-VERB.html">VERB</a></tt>-<tt><a href="abq_atb-pos-NOUN.html">NOUN</a></tt> (42; 51% instances), <tt><a href="abq_atb-pos-VERB.html">VERB</a></tt>-<tt><a href="abq_atb-pos-PRON.html">PRON</a></tt> (34; 41% instances), <tt><a href="abq_atb-pos-VERB.html">VERB</a></tt>-<tt><a href="abq_atb-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="abq_atb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="abq_atb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="abq_atb-pos-VERB.html">VERB</a></tt>-<tt><a href="abq_atb-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	сара	сара	DET	_	_	2	nmod	_	Gloss=я
2	сыхьиз	хьзы	NOUN	_	Number[psor]=Sing|Person[psor]=1	3	nsubj	_	Gloss=1sg.pr-имя
3	фатимапI	фатима	VERB	_	Tense=Pres|VerbForm=Fin	0	root	_	Gloss=фатима-npst.dcl

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	сара	сара	PRON	_	_	3	nsubj	_	Gloss=я
2	йшвасхIвырныс	хIвара	VERB	_	Gender[abs]=Neut|Number[abs]=Sing|Number[erg]=Sing|Number[io]=Plur|Person[abs]=3|Person[erg]=1|Person[io]=2|VerbForm=Conv	3	xcomp	_	Gloss=3sg.n.abs-2pl.io-dat-1sg.erg-рассказать-purp
3	йстахъыпI	тахъыра	VERB	_	Gender[abs]=Neut|Number[abs]=Sing|Number[io]=Sing|Person[abs]=3|Person[io]=1|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=3sg.n.abs-1sg.io-хотеться-npst.dcl
4	сшарыпхьагIвхаз	арыпхьагIвхара	VERB	_	Number[abs]=Sing|Person[abs]=1|RelType=Mnr|Tense=Past|VerbForm=NonFin	2	ccomp	_	Gloss=1sg.abs-rel.mnr-учитель-inc-pst.nfin

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj	color:blue
1	уадыргIвана	уадыргIвана	ADV	_	_	3	advmod	_	Gloss=потом
2	апегIамбар	пегIамбар	NOUN	_	Definite=Def	3	nsubj	_	Gloss=def-пророк
3	дгIаразцIгIатI	цIгIара	VERB	_	Gender[abs]=Com|Number[abs]=Sing|Number[io]=Plur|Person[abs]=3|Person[io]=3|Tense=Aor|VerbForm=Fin	0	root	_	Gloss=3sg.h.abs-csl-3pl.io-ben-спрашивать-dcl
4	йачIвыйа	ачIвыйа	VERB	_	Int=Yes	3	ccomp	_	Gloss=что-qn
5	йшвтахъху	тахъхара	VERB	_	Number[io]=Plur|Person[io]=2|RelType=Abs|Tense=Pres|VerbForm=NonFin	4	nsubj	_	Gloss=rel.abs-2pl.io-хотеть-re-prs.nfin

~~~


