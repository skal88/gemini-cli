
import React from 'react';
import { Box, Text } from 'ink';
import { Colors } from '../colors.js';

export const CustomAppWarning: React.FC = () => {
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Text color={Colors.AccentYellow}>
        You are running a custom (and local) version of Gemini CLI.
      </Text>
      <Text color={Colors.Foreground}>
        This version may not have the latest features or bug fixes.
      </Text>
      <Text color={Colors.Foreground}>
        Consider updating to the official version for the best experience.
      </Text>
    </Box>
  );
}