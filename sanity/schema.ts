import { type SchemaTypeDefinition } from 'sanity'
import portfolioSettings from './schemas/portfolioSettings';
import webProject from './schemas/webProject';
import gameProject from './schemas/gameProject';
import home from './schemas/home';
import heading from './schemas/components/heading';
import videoAnimation from './schemas/components/videoAnimation';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    portfolioSettings,
    gameProject,
    webProject,
    home,
    heading,
    videoAnimation
  ],
}
