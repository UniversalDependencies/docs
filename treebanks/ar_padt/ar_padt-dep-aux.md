---
layout: base
title:  'Statistics of aux in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ar_padt-dep-aux-pass.html">aux:pass</a></tt>.

1562 nodes (1%) are attached to their parents as `aux`.

1555 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16005121638924.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (1432; 92% instances), <tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (52; 3% instances), <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (49; 3% instances), <tt><a href="ar_padt-pos-X.html">X</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (16; 1% instances), <tt><a href="ar_padt-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="ar_padt-pos-DET.html">DET</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ar_padt-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	0:root	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
2	قد	قَد	AUX	F---------	_	3	aux	3:aux	Gloss=indeed,has_/_have,may_/_might|LTranslit=qad|Root=qad|Translit=qad|Vform=قَد
3	تحطمت	تَحَطَّم	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	1	parataxis	1:parataxis	Vform=تَحَطَّمَت|Gloss=break,crash|Root=.h .t m|Translit=taḥaṭṭamat|LTranslit=taḥaṭṭam
4	الطائرة	طَائِرَة	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	3	nsubj	3:nsubj	Vform=اَلطَّائِرَةُ|Gloss=aircraft,airplane|Root=.t y r|Translit=aṭ-ṭāʾiratu|LTranslit=ṭāʾirat
5	و	وَ	CCONJ	C---------	_	4	cc	4:cc	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
6	هي	هُوَ	PRON	SP---3FS1-	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	7:nsubj	Gloss=he,she,it|LTranslit=huwa|Translit=hiya|Vform=هِيَ
7	تصميم	تَصمِيم	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	4	advcl:pred	4:advcl:pred	Vform=تَصمِيمٌ|Gloss=plan,sketch,design|Root=.s m m|Translit=taṣmīmun|LTranslit=taṣmīm
8	قديم	قَدِيم	ADJ	A-----MS1I	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	7	amod	7:amod	Vform=قَدِيمٌ|Gloss=old,ancient|Root=q d m|Translit=qadīmun|LTranslit=qadīm
9	ل	لِ	ADP	P---------	AdpType=Prep	10	case	10:case	Gloss=for,to|LTranslit=li|Root=l|Translit=li|Vform=لِ
10	طراز	طِرَاز	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	7	nmod	7:nmod:لِ:gen	Gloss=model,type,calibre|LTranslit=ṭirāz|Root=.t r z|Translit=ṭirāzi|Vform=طِرَازِ
11	"	"	PUNCT	G---------	_	12	punct	12:punct	SpaceAfter=No|Vform="|Translit="
12	سي	سِي	X	X---------	Foreign=Yes	10	nmod	10:nmod	SpaceAfter=No|Vform=سِي|Gloss=C.|Root=sI|Translit=sī|LTranslit=sī
13	.	.	PUNCT	G---------	_	12	punct	12:punct	SpaceAfter=No|Vform=.|Translit=.
14	ال	إِل	X	X---------	Foreign=Yes	10	nmod	10:nmod	SpaceAfter=No|Vform=إِل|Gloss=L.|Root='il|Translit=ʾil|LTranslit=ʾil
15	.	.	PUNCT	G---------	_	1	punct	1:punct	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 aux	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	0:root	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
2	أشار	أَشَار	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	1:parataxis	Gloss=indicate,mention,cite|LTranslit=ʾašār|Root=^s w r|Translit=ʾašāra|Vform=أَشَارَ
3	صالح	صَالِح	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	2	nsubj	2:nsubj	Vform=صَالِحٌ|Gloss=Salih,Saleh|Root=.s l .h|Translit=ṣāliḥun|LTranslit=ṣāliḥ
4	الى	إِلَى	ADP	P---------	AdpType=Prep	7	case	7:case	Vform=إِلَى|Gloss=to,towards|Root=' l y|Translit=ʾilā|LTranslit=ʾilā
5	"	"	PUNCT	G---------	_	7	punct	7:punct	SpaceAfter=No|Vform="|Translit="
6	ان	أَنَّ	SCONJ	C---------	_	7	mark	7:mark	Vform=أَنَّ|Gloss=that|Root=' n|Translit=ʾanna|LTranslit=ʾanna
7	المهم	مُهِمّ	ADJ	A-----MS4D	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	2	obl:arg	2:obl:arg:إِلَى_أَنَّ	Vform=اَلمُهِمَّ|Gloss=important,serious|Root=h m m|Translit=al-muhimma|LTranslit=muhimm
8	هو	هُوَ	PRON	SP---3MS1-	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obl	7:obl:nom	Vform=هُوَ|Gloss=he,she,it|Translit=huwa|LTranslit=huwa
9	الارادة	إِرَادَة	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	7	nsubj	7:nsubj	Vform=اَلإِرَادَةُ|Gloss=desire,will|Root=r w d|Translit=al-ʾirādatu|LTranslit=ʾirādat
10	العراقية	عِرَاقِيّ	ADJ	A-----FS1D	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	amod	9:amod	Vform=اَلعِرَاقِيَّةُ|Gloss=Iraqi|Root=` r q|Translit=al-ʿirāqīyatu|LTranslit=ʿirāqīy
11	و	وَ	CCONJ	C---------	_	7	cc	7:cc	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
12	ليس	لَيس	AUX	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	7	aux	7:aux	Gloss=be_not,is_not|LTranslit=lays|Root=l y s|Translit=laysa|Vform=لَيسَ
13	التوقعات	تَوَقُّع	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	7	dep	7:dep	Vform=اَلتَّوَقُّعَاتُ|Gloss=expectation,anticipation|Root=w q `|Translit=at-tawaqquʿātu|LTranslit=tawaqquʿ
14	ب	بِ	ADP	P---------	AdpType=Prep|ExtPos=ADP	16	case	16:case	Gloss=by,with|LTranslit=bi|Root=bi|Translit=bi|Vform=بِ
15	شأن	شَأن	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	14	fixed	14:fixed	Gloss=matter,affair,concern,regard|LTranslit=šaʾn|Root=^s ' n|Translit=šaʾni|Vform=شَأنِ
16	مواقف	مَوقِف	NOUN	N------P2R	Case=Gen|Definite=Cons|Number=Plur	13	nmod	13:nmod:بِشَأنِ:gen	Vform=مَوَاقِفِ|Gloss=position|Root=w q f|Translit=mawāqifi|LTranslit=mawqif
17	اطراف	طَرَف	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	16	nmod	16:nmod:gen	Vform=أَطرَافٍ|Gloss=party,side|Root=.t r f|Translit=ʾaṭrāfin|LTranslit=ṭaraf
18	خارجية	خَارِجِيّ	ADJ	A-----FS2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	17	amod	17:amod	Vform=خَارِجِيَّةٍ|Gloss=outer,foreign,outside|Root=_h r ^g|Translit=ḫāriǧīyatin|LTranslit=ḫāriǧīy
19	خارجية	خَارِجِيّ	ADJ	A-----FS2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	17	amod	17:amod	SpaceAfter=No|Vform=خَارِجِيَّةٍ|Gloss=outer,foreign,outside|Root=_h r ^g|Translit=ḫāriǧīyatin|LTranslit=ḫāriǧīy
20	"	"	PUNCT	G---------	_	7	punct	7:punct	Vform="|Translit="
21	.	.	PUNCT	G---------	_	1	punct	1:punct	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 aux	color:blue
1	شيخ	شَيخ	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	0	root	0:root	Vform=شَيخُ|Gloss=sheikh,chieftain,senators|Root=^s y _h|Translit=šayḫu|LTranslit=šayḫ
2	الأزهر	أَزهَر	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	1	nmod	1:nmod:gen	SpaceAfter=No|Vform=اَلأَزهَرِ|Gloss=Azhar|Root=z h r|Translit=al-ʾazhari|LTranslit=ʾazhar
3	:	:	PUNCT	G---------	_	2	punct	2:punct	Vform=:|Translit=:
4	"	"	PUNCT	G---------	_	6	punct	6:punct	SpaceAfter=No|Vform="|Translit="
5	من	مِن	ADP	P---------	AdpType=Prep	6	case	6:case	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
6	حق	حَقّ	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	1	parataxis	1:parataxis	Vform=حَقِّ|Gloss=truth,right,law|Root=.h q q|Translit=ḥaqqi|LTranslit=ḥaqq
7	فرنسا	فَرَنسَا	X	X---------	Foreign=Yes	6	nmod	6:nmod	Vform=فَرَنسَا|Gloss=France|Root=farans|Translit=faransā|LTranslit=faransā
8	منع	مَنع	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	6	nsubj	6:nsubj	Vform=مَنعُ|Gloss=prevention,interdiction|Root=m n `|Translit=manʿu|LTranslit=manʿ
9	الحجاب	حِجَاب	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	8	nmod	8:nmod:gen	Vform=اَلحِجَابِ|Gloss=veil|Root=.h ^g b|Translit=al-ḥiǧābi|LTranslit=ḥiǧāb
10	و	وَ	CCONJ	C---------	_	13	cc	13:cc	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
11	ليس	لَيس	AUX	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	13	aux	13:aux	Gloss=be_not,is_not|LTranslit=lays|Root=l y s|Translit=laysa|Vform=لَيسَ
12	من	مِن	ADP	P---------	AdpType=Prep	13	case	13:case	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
13	حق	حَقّ	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	6	conj	1:parataxis|6:conj	Vform=حَقِّ|Gloss=truth,right,law|Root=.h q q|Translit=ḥaqqi|LTranslit=ḥaqq
14	أحد	أَحَد	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	13	nmod	13:nmod:gen	Vform=أَحَدٍ|Gloss=one,someone|Root=' .h d|Translit=ʾaḥadin|LTranslit=ʾaḥad
15	التدخل	تَدَخُّل	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	13	nsubj	13:nsubj	Vform=اَلتَّدَخُّلُ|Gloss=intervention,interference|Root=d _h l|Translit=at-tadaḫḫulu|LTranslit=tadaḫḫul
16	في	فِي	ADP	P---------	AdpType=Prep	17	case	17:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
17	شئون	شَأن	NOUN	N------P2R	Case=Gen|Definite=Cons|Number=Plur	15	nmod	15:nmod:فِي:gen	Vform=شُؤُونِ|Gloss=matter,affair,concern,regard|Root=^s ' n|Translit=šuʾūni|LTranslit=šaʾn
18	المسلمين	مُسلِم	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	17	nmod	17:nmod:gen	SpaceAfter=No|Vform=اَلمُسلِمِينَ|Gloss=Muslim|Root=s l m|Translit=al-muslimīna|LTranslit=muslim
19	"	"	PUNCT	G---------	_	6	punct	6:punct	Vform="|Translit="

~~~


