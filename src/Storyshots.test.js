import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({
	test: multiSnapshotWithOptions({
    // https://github.com/mui-org/material-ui/issues/17119#issuecomment-627848588
    createNodeMock: (node: any) => document.createElement(node.type),
  }),
});
