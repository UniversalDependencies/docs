---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

## VerbForm

Even though the name of the feature seems to suggest that it is used exclusively with [verbs](../../u/pos/VERB), it is not the case. 
Some verb forms in some languages actually form a gray zone between verbs and other parts of speech ([nouns](../../u/pos/NOUN), 
[adjectives](../../u/pos/ADJ) and [adverbs](../../u/pos/ADV)). For instance, participles may be either classified as verbs or as adjectives, 
depending on language and context. In both cases `VerbForm=Part` may be used to separate them from other verb forms or other types of adjectives.

Pomak has both finite verb forms  and non-finite ones. Non-finite verb forms include the participles, the (residual)infinitive and the converbs.


### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](Mood.html), it is finite.

#### Examples

* _vremǿso <b>je</b> óblačno_ "ο καιρός είναι συννεφιασμένος"
* _navón <b>letí</b> snæg_ "έξω <b>ρίχνει</b> χιόνι"
* _še <b>dójdeš</b> li da mí <b>pamógneš</b>?_ "θα έρθεις να με βοηθήσεις;"
* _denése <b>so</b> bóržo <b>pamínot</b>_ "οι μέρες γήγορα περνούν"
* _<b>valésavyj</b> da na <b>pánneš</b>_ "πρόσεχε να μην πέσεις"

### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form that shares properties of verbs and adjectives.

In Pomak, participles are always tagged as 'Tense=Past' and they may be active or passive ones. A further division classifies them by 
their aspectual properties into perfective and imperfective ones. 

<!--Οι μετοχές στην Πομακική μπορούν χωριστούν σε δύο γενικές κατηγορίες: τις ενεργητικές παρελθοντικές μετοχές (active) 
και τις παθητικές παρελθοντικές μετοχές (passive).
Κάθε γενική κατηγορία μπορεί να διαιρεθεί με βάση τη ρηματική όψη σε εξακολουθητικές (past imperfective) και συνοπτικές (past perfective) μετοχές.-->

#### Examples

<b> Active participles:</b>

Imperfective participles: `Aspect=Imp|Voice=Act`

- *kázaval (kázavom)* "έλεγε, διηγούνταν"
- *atkáraval (atkáravom)* "πηγαίνε, μετέφερε"
- *písaval (písavom)* "έγραφε"
- *danásel (danásem)* "έφερνε"
- *prevádal (prevádom)* "έστελνε"
- *dával (dávom)* "έδινε"

Perfective participles: `Aspect=Perf|Voice=Act`

- *kázal (kážom)* "είπε, διηγήθηκε"
- *atkáral (ótkarom)* "πήγε, μετέφερε"
- *písal (píšom)* "έγραψε"
- *danél (dónesom)* "έφερε"
- *prevódil (prévadem)* "έστειλε"
- *dal (dam)* "έδωσε"

<b>Passive participles: </b>

Imperfective participles: `Aspect=Imp|Voice=Pass`

- *kázavan (kázavom)* "ειπωμένος κατ' επανάληψη"
- *atkáravan (atkáravom)* "μεταφερμένος κατ' επανάληψη"
- *písavan (písavom)* "γραμμένος κατ' επανάληψη"
- *danásen (danásem)* "φερμένος κατ' επανάληψη"
- *prevádan (prevádom)* "σταλμένος κατ' επανάληψη"
- *dávan (dávom)* "δωσμένος κατ' επανάληψη"

Perfective participles:  `Aspect=Perf|Voice=Pass`

- *kázan (kážom)* "ειπωμένος άπαξ"
- *atkáran (ótkarom)* "μεταφερμένος άπαξ"
- *písan (píšom)* "γραμμένος άπαξ"
- *danésen (dónesom)* "φερμένος άπαξ"
- *prevóden (prévadem)* "σταλμένος άπαξ"
- *dáden (dam)* "δωσμένος άπαξ"


### <a name="Conv">`Conv`</a>: converb

The converb, also called adverbial participle, is a non-finite verb form that shares properties of verbs and adverbs. 
It appears e.g. in Slavic and Indo-Aryan languages.

In Pomak it is related only to imperfective verb forms.

#### Examples

- *patrǿsna mí só <b>sedǿva</b> (sédom)* "βαρέθηκα το καθισιό"
- *zabalǽho nu nagýse <b>varvǿva</b> (vórvem)* "πόνεσαν τα πόδια μας από το περπάτημα"
- *skócaho só <b>smǿva</b> (smøm so)* "ξεκαρδίστηκαν στα γέλια"
- *ačíne ji so atékaly <b>plákava</b> (pláčem)* "τα μάτια της πρήστηκαν από το κλάμα"
- *umaríh só mestá <b>méreva</b> (mérem)* "κουράστηκα χωράφια να μετράω"


### <a name="Inf">`Inf`</a>: infinitive

Infinitives of Pomak have an imperfective and  a perfective form and  a range of usages that are exemplified below. Among others, the infinitive forms 
the detering imperative [Imperative]() when it appears after the particle *namój / namójte* "not".

#### Examples

<!--Ritvan please explain the usage before eachh example-->

- *ne mí só je <b>rabatí</b> naštése, alá trǽbava* "δεν θέλω / δεν μ' αρέσει να δουλεύω τη νύχτα, αλλά πρέπει"
- *za tébe šom <b>attí</b> / <b>do</b> dur da Atíno* "για χάρη σου θα πήγαινα / ερχόμουν μέχρι την Αθήνα"
- *<b>padjó</b> ti, májko, vaz drúman, <b>pytá</b> ti, májko drúmniceh* "θα ανηφορίσεις, μάνα, στο δρόμο, θα ρωτάς, μάνα, τους διαβάτες (δημ. τραγ.)"
- *<b>račí</b> / <b>mog</b> li ti da mí zǿmeš annók hlǽba at fyrýnane?* "θα δεχόσουν / μπορούσες να μου πάρεις ένα ψωμί από τον φούρνο;"
- Detering imperative: *namój <b>barzá</b>, še da fpréme* "μην βιάζεσαι, θα φτάσουμε"

A very special type of Pomamk infinitives is related to a small number of imperfective verbs. These infinitives are repeated to form bilects that 
 denote the continuous/monotonous/rythmic repetition of a motion, activity etc. 

<!-- Η Πομακική παρουσιάζει και μια ειδικότερη κατηγορία απαρεμφατικών τύπων που παράγονται από κάποια (λίγα σχετικά) ρήματα διαρκούς όψης.
Το κύριο χαρακτηριστικό αυτών των τύπων είναι ότι χρησιμοποιούνται επαναλαμβανόμενα (εις διπλούν) και δηλώνουν μια ενέργεια / κίνηση / πράξη 
που επαναλαμβάνεται αδιάκοπα / μονότονα / ρυθμικά κλπ.-->

#### Examples

<!--the greek translatoin is in fact a gloss, we need an english translation-->

- *čúktiti čúktiti (čúkom)* "χτύπα και χτύπα"
- *lǘštiti lǘštiti (lǘllem)* "κούνα και κούνα"
- *vórttiti vórttiti (vórtem)* "γύρνα και γύρνα"
- *séktiti séktiti (séčem)* "χτύπα και χτύπα (με το τσεκούρι)"

<!-- Interlanguage links updated So kvě 14 19:02:44 CEST 2022 -->
