/* Interactive "Language Diversity Across Releases" charts of the homepage.
 *
 * Markup and data: _includes/diversity.html    Styles: css/diversity.css
 * Data generator:  infrastructure/make_diversity_data.py
 *
 * Two pie charts (number of languages, number of words) and a table show the
 * same "slices" of the languages in one UD release. Slices are language families;
 * clicking a family shows its genera, clicking a genus shows its languages.
 * A slider chooses the release.
 */
(() => {
  'use strict';

  // ---------------------------------------------------------------- Settings

  const SVG_NS = 'http://www.w3.org/2000/svg';

  const PALETTE = ['#6666ff', '#fdb462', '#69b3b6', '#fff799', '#ff6666', '#00b050', '#e3811a',
                   '#f565bb', '#00cc33', '#cccccc', '#c28040', '#9d7fd1', '#8fd175', '#d46a6a'];
  const OTHER_COLOR = '#e5e5e5';
  // Used for slices that did not exist in the latest release, so they have no fixed color.
  const FALLBACK_COLORS = PALETTE.slice(-4);

  // Families below this share, in both languages and words, are merged into "Other".
  const MIN_SHARE_OF_OWN_SLICE = 0.015;
  // Slices below this share get no label on the pie (they are still in the table).
  const MIN_SHARE_FOR_LABEL = 0.02;

  // Geometry of the pie, in SVG units (the pie is centered at 0,0).
  const PIE_RADIUS = 100;
  const LABEL_LINE_RADIUS = 108;   // where the leader line bends
  const LABEL_ANCHOR_RADIUS = 112; // preferred vertical position of a label
  const LABEL_LINE_END_X = 114;
  const LABEL_TEXT_X = 118;
  const LABEL_SPACING = 10;        // minimal vertical distance between labels
  const LABEL_MAX_Y = 120;         // labels must not go below this

  // Slices are grouped by this property of a language, one level deeper at each click.
  const LEVELS = ['family', 'genus', 'name'];

  // -------------------------------------------------------------------- Data

  const { releases, languages, treebanks } = window.UD_DIVERSITY; // set by _includes/diversity.html
  const latestRelease = releases[releases.length - 1];
  const languageByName = new Map(languages.map((language) => [language.name, language]));

  /** Total number of words of every language in the given release: Map(language name -> words). */
  function wordsPerLanguage(releaseId) {
    const totals = new Map();
    for (const treebank of treebanks) {
      const words = treebank.words[releaseId];
      if (!words) continue; // the treebank is not part of this release
      const wordsSoFar = totals.get(treebank.language) ?? 0;
      totals.set(treebank.language, wordsSoFar + words);
    }
    return totals;
  }

  /** The languages of the given release, with their family, genus and number of words. */
  function languagesInRelease(releaseId) {
    return [...wordsPerLanguage(releaseId)].map(([name, words]) => {
      const { family, genus } = languageByName.get(name);
      return { name, family, genus, words };
    });
  }

  // ------------------------------------------------------------------- State

  const state = {
    releaseId: latestRelease.id,
    // Drill-down: [] = families, [family] = its genera, [family, genus] = its languages.
    path: [],
    // At the top level: show only the small families that are otherwise merged into "Other".
    showSmallFamilies: false,
  };

  function resetDrillDown() {
    state.path = [];
    state.showSmallFamilies = false;
  }

  // ------------------------------------------------------------------ Slices
  //
  // A slice is {name, languageCount, wordCount, languageShare, wordShare, isOther, color}.

  /** The languages of the release that are inside the current drill-down. */
  function languagesInView(releaseId) {
    let selected = languagesInRelease(releaseId);
    state.path.forEach((value, depth) => {
      selected = selected.filter((language) => language[LEVELS[depth]] === value);
    });
    return selected;
  }

  /** Groups languages by the given property, e.g. 'family'; biggest groups (by languages) first. */
  function groupLanguages(selected, property) {
    const groups = new Map();
    for (const language of selected) {
      const name = language[property];
      const group = groups.get(name) ?? { name, languageCount: 0, wordCount: 0 };
      group.languageCount += 1;
      group.wordCount += language.words;
      groups.set(name, group);
    }
    return [...groups.values()].sort((a, b) =>
      b.languageCount - a.languageCount || b.wordCount - a.wordCount || a.name.localeCompare(b.name));
  }

  /** Adds the share of each slice in the languages and words of all given slices. */
  function withShares(slices) {
    const totalLanguages = slices.reduce((sum, slice) => sum + slice.languageCount, 0);
    const totalWords = slices.reduce((sum, slice) => sum + slice.wordCount, 0);
    return slices.map((slice) => ({
      ...slice,
      languageShare: slice.languageCount / totalLanguages,
      wordShare: slice.wordCount / totalWords,
    }));
  }

  const isSmall = (slice) =>
    slice.languageShare < MIN_SHARE_OF_OWN_SLICE && slice.wordShare < MIN_SHARE_OF_OWN_SLICE;

  /** Merges the small slices into one "Other" slice (or, if asked, shows only the small ones). */
  function handleSmallFamilies(slices) {
    const small = slices.filter(isSmall);
    if (state.showSmallFamilies) return withShares(small);

    const large = slices.filter((slice) => !isSmall(slice));
    if (small.length === 0) return large;
    const other = {
      name: 'Other',
      isOther: true,
      languageCount: small.reduce((sum, slice) => sum + slice.languageCount, 0),
      wordCount: small.reduce((sum, slice) => sum + slice.wordCount, 0),
    };
    return withShares([...large, other]);
  }

  /** The slices to show for the current drill-down in the given release (without colors). */
  function buildSlices(releaseId) {
    const property = LEVELS[state.path.length];
    let slices = withShares(groupLanguages(languagesInView(releaseId), property));
    if (state.path.length === 0) slices = handleSmallFamilies(slices);
    return slices;
  }

  /** Colors by rank in the latest release, so that a family keeps its color when the slider moves. */
  function buildColoredSlices(releaseId) {
    let slices = buildSlices(releaseId);
    if (slices.length === 0) { // e.g. the family we looked at did not exist yet
      resetDrillDown();
      slices = buildSlices(releaseId);
    }
    const reference = releaseId === latestRelease.id ? slices : buildSlices(latestRelease.id);
    const colorByName = new Map(reference.map((slice, rank) => [slice.name, PALETTE[rank % PALETTE.length]]));

    let fallbacksUsed = 0;
    return slices.map((slice) => {
      let color = OTHER_COLOR;
      if (!slice.isOther) {
        color = colorByName.get(slice.name) ?? FALLBACK_COLORS[fallbacksUsed++ % FALLBACK_COLORS.length];
      }
      return { ...slice, color };
    });
  }

  const isLeafLevel = () => state.path.length === LEVELS.length - 1; // slices are single languages

  // ------------------------------------------------------------- Formatting

  const formatNumber = (n) => n.toLocaleString('en');
  const formatPercent = (share) => (share < 0.01 ? '<1' : String(Math.round(share * 100)));

  function describe(slice) {
    const languageWord = slice.languageCount === 1 ? 'language' : 'languages';
    return `${slice.name}: ${formatNumber(slice.languageCount)} ${languageWord} (${formatPercent(slice.languageShare)}%), ` +
           `${formatNumber(slice.wordCount)} words (${formatPercent(slice.wordShare)}%)`;
  }

  // --------------------------------------------------------------- DOM utils

  const root = document.getElementById('diversity');
  const find = (selector) => root.querySelector(selector);
  const tooltip = find('.div-tip');

  function svgElement(tagName, attributes = {}) {
    const element = document.createElementNS(SVG_NS, tagName);
    for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
    return element;
  }

  function showTooltip(event, text) {
    const box = root.getBoundingClientRect();
    tooltip.textContent = text;
    tooltip.hidden = false;
    const left = Math.min(event.clientX - box.left + 12, box.width - tooltip.offsetWidth);
    tooltip.style.left = `${Math.max(0, left)}px`;
    tooltip.style.top = `${event.clientY - box.top + 14}px`;
  }

  /** Makes a pie slice or table row show a tooltip on hover and drill down on click. */
  function makeInteractive(element, slice) {
    element.addEventListener('mousemove', (event) => showTooltip(event, describe(slice)));
    element.addEventListener('mouseleave', () => { tooltip.hidden = true; });
    element.addEventListener('click', () => drillDownInto(slice));
  }

  function drillDownInto(slice) {
    if (isLeafLevel()) return; // a language has nothing below it
    if (slice.isOther) state.showSmallFamilies = true;
    else state.path.push(slice.name);
    render();
  }

  // --------------------------------------------------------------------- Pie

  const polar = (angle, radius) => [radius * Math.cos(angle), radius * Math.sin(angle)];

  /** The angles occupied by each slice, starting at 12 o'clock and going clockwise. */
  function layoutArcs(slices, shareProperty) {
    let startAngle = -Math.PI / 2;
    return slices.map((slice) => {
      const endAngle = startAngle + slice[shareProperty] * 2 * Math.PI;
      const arc = { slice, startAngle, endAngle, midAngle: (startAngle + endAngle) / 2 };
      startAngle = endAngle;
      return arc;
    });
  }

  function arcPathData({ startAngle, endAngle }, isWholeCircle) {
    if (isWholeCircle) { // a single arc from a point to itself would draw nothing
      return `M0,${-PIE_RADIUS} A${PIE_RADIUS},${PIE_RADIUS} 0 1,1 0,${PIE_RADIUS} ` +
             `A${PIE_RADIUS},${PIE_RADIUS} 0 1,1 0,${-PIE_RADIUS} Z`;
    }
    const [x0, y0] = polar(startAngle, PIE_RADIUS);
    const [x1, y1] = polar(endAngle, PIE_RADIUS);
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    return `M0,0 L${x0},${y0} A${PIE_RADIUS},${PIE_RADIUS} 0 ${largeArc},1 ${x1},${y1} Z`;
  }

  /** Moves labels (sorted by y) apart so that they do not overlap or leave the picture. */
  function spreadApart(labels) {
    for (let i = 1; i < labels.length; i++) {
      labels[i].y = Math.max(labels[i].y, labels[i - 1].y + LABEL_SPACING);
    }
    const overflow = labels.length ? labels[labels.length - 1].y - LABEL_MAX_Y : 0;
    if (overflow > 0) labels.forEach((label) => { label.y -= overflow; });
    for (let i = labels.length - 2; i >= 0; i--) {
      labels[i].y = Math.min(labels[i].y, labels[i + 1].y - LABEL_SPACING);
    }
  }

  /** Labels of the big slices, on the right (side = 1) or left (side = -1) of the pie. */
  function layoutLabels(arcs, shareProperty, side) {
    const labels = arcs
      .filter(({ slice, midAngle }) =>
        slice[shareProperty] >= MIN_SHARE_FOR_LABEL && (Math.cos(midAngle) >= 0 ? 1 : -1) === side)
      .map((arc) => ({ arc, side, y: LABEL_ANCHOR_RADIUS * Math.sin(arc.midAngle) }))
      .sort((a, b) => a.y - b.y);
    spreadApart(labels);
    return labels;
  }

  function drawLabel({ arc, side, y }, shareProperty, svg) {
    const [startX, startY] = polar(arc.midAngle, PIE_RADIUS);
    const [bendX] = polar(arc.midAngle, LABEL_LINE_RADIUS);
    const percent = Math.round(arc.slice[shareProperty] * 100);

    svg.appendChild(svgElement('polyline', {
      points: `${startX},${startY} ${bendX},${y} ${side * LABEL_LINE_END_X},${y}`,
    }));
    const text = svgElement('text', {
      x: side * LABEL_TEXT_X,
      y: y + 2.5, // centers the text on the line
      'text-anchor': side > 0 ? 'start' : 'end',
    });
    text.textContent = `${arc.slice.name} ${percent}%`;
    svg.appendChild(text);
  }

  function drawPie(svg, slices, metric) {
    const shareProperty = metric === 'languages' ? 'languageShare' : 'wordShare';
    const arcs = layoutArcs(slices, shareProperty);
    svg.replaceChildren();

    for (const arc of arcs) {
      const path = svgElement('path', {
        d: arcPathData(arc, arcs.length === 1),
        fill: arc.slice.color,
      });
      if (isLeafLevel()) path.classList.add('leaf');
      makeInteractive(path, arc.slice);
      svg.appendChild(path);
    }
    for (const side of [1, -1]) {
      layoutLabels(arcs, shareProperty, side).forEach((label) => drawLabel(label, shareProperty, svg));
    }
  }

  // ------------------------------------------------------------------- Table

  function tableCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
  }

  function tableRow(slice) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    const swatch = document.createElement('i');
    swatch.style.background = slice.color;
    nameCell.append(swatch, slice.name);

    row.append(
      nameCell,
      tableCell(formatNumber(slice.languageCount)), tableCell(`${formatPercent(slice.languageShare)}%`),
      tableCell(formatNumber(slice.wordCount)), tableCell(`${formatPercent(slice.wordShare)}%`));
    if (isLeafLevel()) row.classList.add('leaf');
    makeInteractive(row, slice);
    return row;
  }

  // ----------------------------------------------------- Breadcrumbs, release

  function link(text, onClick) {
    const anchor = document.createElement('a');
    anchor.textContent = text;
    anchor.onclick = onClick;
    return anchor;
  }

  /** "All families › Indo-European › Germanic": every part but the last one is a link up. */
  function drawBreadcrumbs() {
    const trail = [];
    if (state.path.length > 0 || state.showSmallFamilies) {
      trail.push(link('All families', () => { resetDrillDown(); render(); }));
      if (state.showSmallFamilies) trail.push('Other families');
      state.path.forEach((name, depth) => {
        const isLast = depth === state.path.length - 1;
        trail.push(isLast ? name : link(name, () => { state.path = state.path.slice(0, depth + 1); render(); }));
      });
    }

    const parts = trail.flatMap((part, i) => (i === 0 ? [part] : [' › ', part]));
    find('.div-crumbs').replaceChildren(...parts);
  }

  function drawReleaseInfo() {
    const release = releases.find((r) => r.id === state.releaseId);
    find('.div-relname').textContent = release.id;
    find('.div-reldate').textContent = `(${release.date})`;

    const warning = find('.div-approx');
    warning.hidden = release.exact;
    warning.textContent = `approximate: ${release.treebanks} treebanks were released, ` +
                          'the data shown is reconstructed from the homepage of the time';
  }

  // ------------------------------------------------------------------ Render

  function render() {
    const slices = buildColoredSlices(state.releaseId);
    drawReleaseInfo();
    drawBreadcrumbs();
    root.querySelectorAll('.div-pie').forEach((svg) => drawPie(svg, slices, svg.dataset.metric));
    find('tbody').replaceChildren(...slices.map(tableRow));
  }

  const slider = find('#div-release');
  slider.max = releases.length - 1;
  slider.value = releases.length - 1;
  slider.addEventListener('input', () => {
    state.releaseId = releases[Number(slider.value)].id;
    render();
  });
  render();
})();
